'use client';

import {
  useEffect,
  useRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactNode
} from 'react';

export type SpecularButtonSize = 'sm' | 'md' | 'lg';

const SIZES: Record<SpecularButtonSize, string> = {
  sm: 'px-5 py-2.5 text-[0.875rem]',
  md: 'px-7 py-3.5 text-[1rem]',
  lg: 'px-[38px] py-[18px] text-[1.125rem]'
};

const BUTTON =
  'relative isolate m-0 inline-flex cursor-pointer items-center justify-center gap-[0.5em] border-0 [font-family:inherit] font-medium leading-none tracking-[0.01em] [color:var(--sb-text-color)] [border-radius:var(--sb-radius)] [background:color-mix(in_srgb,var(--sb-tint)_calc(var(--sb-tint-opacity)*100%),transparent)] shadow-[0_10px_24px_-14px_rgba(0,0,0,0.45)] [-webkit-backdrop-filter:blur(var(--sb-blur))] [backdrop-filter:blur(var(--sb-blur))] outline-none [-webkit-tap-highlight-color:transparent] transition-transform duration-250 ease-[cubic-bezier(0.2,0.8,0.2,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-[3px] focus-visible:[outline-color:color-mix(in_srgb,var(--sb-text-color)_55%,transparent)] disabled:cursor-default disabled:opacity-50 disabled:active:scale-100 no-underline';

const PAD = 24;
const TAU = Math.PI * 2;

export interface SpecularButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
  children?: ReactNode;
  size?: SpecularButtonSize;
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  idleIntensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  glow?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: any;
}

type Settings = {
  radius: number;
  lineColor: string;
  baseColor: string;
  intensity: number;
  idleIntensity: number;
  shineSize: number;
  shineFade: number;
  thickness: number;
  glow: number;
  speed: number;
  followMouse: boolean;
  proximity: number;
  autoAnimate: boolean;
  disabled: boolean;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const wrap = (value: number) => value - Math.floor(value);

const hexToRgba = (color: string, alpha: number): string => {
  if (!color) return `rgba(255, 255, 255, ${alpha})`;
  if (color.startsWith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    if (hex.length === 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }
  if (color.startsWith('rgb(')) {
    return color.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
  }
  if (color.startsWith('rgba(')) {
    return color.replace(/,[\s\d.]+\)$/, `, ${alpha})`);
  }
  return color;
};

const loopPosition = (x: number, y: number, halfX: number, halfY: number, r: number) => {
  const innerX = halfX - r;
  const innerY = halfY - r;
  const arc = (Math.PI / 2) * r;
  const quarter = innerX + innerY + arc;
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  const qx = ax - innerX;
  const qy = ay - innerY;
  let s: number;
  if (qx > 0 && qy > 0) s = innerY + Math.atan2(qy, qx) * r;
  else if (qx > qy) s = Math.min(ay, innerY);
  else s = innerY + arc + innerX - Math.min(ax, innerX);
  if (x < 0) s = y >= 0 ? 2 * quarter - s : 2 * quarter + s;
  else if (y < 0) s = 4 * quarter - s;
  return wrap(s / Math.max(4 * quarter, 0.0001));
};

const rimPoint = (position: number, halfX: number, halfY: number, r: number): [number, number] => {
  const innerX = halfX - r;
  const innerY = halfY - r;
  const arc = (Math.PI / 2) * r;
  const quarter = innerX + innerY + arc;
  let s = wrap(position) * 4 * quarter;
  let signX = 1;
  let signY = 1;
  if (s > 3 * quarter) {
    s = 4 * quarter - s;
    signY = -1;
  } else if (s > 2 * quarter) {
    s -= 2 * quarter;
    signX = -1;
    signY = -1;
  } else if (s > quarter) {
    s = 2 * quarter - s;
    signX = -1;
  }
  let x = innerX - (s - innerY - arc);
  let y = halfY;
  if (s <= innerY) {
    x = halfX;
    y = s;
  } else if (s <= innerY + arc) {
    const angle = (s - innerY) / Math.max(r, 0.0001);
    x = innerX + Math.cos(angle) * r;
    y = innerY + Math.sin(angle) * r;
  }
  return [x * signX, y * signY];
};

const drawRoundRectPath = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) => {
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
};

const SpecularButton = ({
  children = 'Get Started',
  size = 'lg',
  radius = 18,
  tint = '#ffffff',
  tintOpacity = 0.04,
  blur = 0,
  textColor = '#f5f5f5',
  lineColor = '#ffffff',
  baseColor = '#525252',
  intensity = 1,
  idleIntensity = 0.35,
  shineSize = 10,
  shineFade = 34,
  thickness = 1.2,
  glow = 1,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  disabled = false,
  href,
  target,
  rel,
  onClick,
  className = '',
  type = 'button',
  style,
  ...rest
}: SpecularButtonProps) => {
  const buttonRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wakeRef = useRef<(() => void) | null>(null);

  const settings: Settings = {
    radius: Math.max(0, radius),
    lineColor: String(lineColor),
    baseColor: String(baseColor),
    intensity: Math.max(0, intensity),
    idleIntensity: clamp(idleIntensity, 0, 1),
    shineSize: Math.max(0, shineSize),
    shineFade: Math.max(0, shineFade),
    thickness: Math.max(0, thickness),
    glow: Math.max(0, glow),
    speed,
    followMouse,
    proximity: Math.max(1, proximity),
    autoAnimate,
    disabled
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const button = buttonRef.current;
    const canvas = canvasRef.current;
    if (!button || !canvas) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) {
      canvas.style.display = 'none';
      return undefined;
    }

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const view = { width: 1, height: 1, ratio: 1 };
    const pointer = { x: 0, y: 0, known: false };
    const state = { spot: 0, level: 0, press: 0, ready: false };
    let raf = 0;
    let last = 0;
    let visible = true;

    const cornerRadius = (s: Settings) => Math.min(s.radius, view.width / 2, view.height / 2);

    const restSpot = (s: Settings) => {
      const r = cornerRadius(s);
      const inset = r * (1 - Math.SQRT1_2);
      return loopPosition(inset - view.width / 2, view.height / 2 - inset, view.width / 2, view.height / 2, r);
    };

    const aim = (s: Settings) => {
      if (!s.followMouse || s.disabled || !pointer.known) return null;
      const rect = button.getBoundingClientRect();
      const scale = rect.width / view.width || 1;
      const halfX = view.width / 2;
      const halfY = view.height / 2;
      const x = (pointer.x - rect.left - rect.width / 2) / scale;
      const y = (rect.top + rect.height / 2 - pointer.y) / scale;
      const distance = Math.hypot(Math.max(Math.abs(x) - halfX, 0), Math.max(Math.abs(y) - halfY, 0));
      const t = clamp(1 - distance / s.proximity, 0, 1);
      const near = t * t * (3 - 2 * t);
      const nearest = loopPosition(x, y, halfX, halfY, cornerRadius(s));
      if (distance > 0) return { spot: nearest, near };
      const depth = clamp(Math.min(halfX - Math.abs(x), halfY - Math.abs(y)) / (halfY * 0.8), 0, 1);
      const sway = restSpot(s) - (x / halfX) * 0.06 - (y / halfY) * 0.02;
      const offset = sway - nearest - Math.round(sway - nearest);
      return { spot: wrap(nearest + offset * depth * depth * (3 - 2 * depth)), near };
    };

    const draw = (s: Settings) => {
      if (!ctx || !canvas) return;
      const { width, height, ratio } = view;

      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(ratio, ratio);

      const x = PAD;
      const y = PAD;
      const w = width;
      const h = height;
      const r = Math.min(s.radius, w / 2, h / 2);
      const cx = x + w / 2;
      const cy = y + h / 2;
      const halfW = w / 2;
      const halfH = h / 2;

      ctx.beginPath();
      drawRoundRectPath(ctx, x, y, w, h, r);
      ctx.strokeStyle = s.baseColor;
      ctx.lineWidth = Math.max(s.thickness * 0.9, 0.75);
      ctx.globalAlpha = 0.45;
      ctx.stroke();

      const intensity = clamp(s.intensity * (state.level + state.press * 0.8), 0, 2.5);
      if (intensity > 0.01) {
        const [rimX, rimY] = rimPoint(state.spot, halfW, halfH, r);
        const spotX = cx + rimX;
        const spotY = cy - rimY;

        ctx.save();
        ctx.beginPath();
        drawRoundRectPath(ctx, x, y, w, h, r);
        ctx.clip();

        const pull = 1 - Math.min(0.35 * halfH, Math.hypot(rimX, rimY)) / Math.max(Math.hypot(rimX, rimY), 0.0001);
        const poolX = cx + rimX * pull;
        const poolY = cy - rimY * pull;
        const poolRadius = Math.max(halfH * 1.5, halfW * 0.8);
        const poolGrad = ctx.createRadialGradient(poolX, poolY, 0, poolX, poolY, poolRadius);
        poolGrad.addColorStop(0, hexToRgba(s.lineColor, clamp(intensity * 0.18, 0, 0.4)));
        poolGrad.addColorStop(0.5, hexToRgba(s.lineColor, clamp(intensity * 0.05, 0, 0.15)));
        poolGrad.addColorStop(1, hexToRgba(s.lineColor, 0));
        ctx.fillStyle = poolGrad;
        ctx.fillRect(x, y, w, h);
        ctx.restore();

        const glowRadius = Math.max(s.glow * 26, 12);
        const glowGrad = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, glowRadius);
        glowGrad.addColorStop(0, hexToRgba(s.lineColor, clamp(intensity * s.glow * 0.45, 0, 0.9)));
        glowGrad.addColorStop(0.35, hexToRgba(s.lineColor, clamp(intensity * s.glow * 0.18, 0, 0.4)));
        glowGrad.addColorStop(1, hexToRgba(s.lineColor, 0));
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(spotX, spotY, glowRadius, 0, TAU);
        ctx.fill();

        const arcHalf = clamp((s.shineSize + s.shineFade) / 360, 0.05, 0.35);
        const streaks = [
          { center: state.spot, mult: 1.0 },
          { center: wrap(state.spot + 0.5), mult: 0.45 }
        ];

        for (const streak of streaks) {
          const N = 24;
          for (let i = 0; i < N; i++) {
            const f0 = -1 + (2 * i) / N;
            const f1 = -1 + (2 * (i + 1)) / N;
            const mid = (f0 + f1) / 2;
            const falloff = Math.exp(-mid * mid * 3.5);
            if (falloff < 0.02) continue;

            const p0 = wrap(streak.center + f0 * arcHalf);
            const p1 = wrap(streak.center + f1 * arcHalf);

            const [rx0, ry0] = rimPoint(p0, halfW, halfH, r);
            const [rx1, ry1] = rimPoint(p1, halfW, halfH, r);

            ctx.beginPath();
            ctx.moveTo(cx + rx0, cy - ry0);
            ctx.lineTo(cx + rx1, cy - ry1);
            ctx.strokeStyle = s.lineColor;
            ctx.lineWidth = Math.max(s.thickness * (1 + falloff * 0.9), 1);
            ctx.globalAlpha = clamp(intensity * streak.mult * falloff, 0, 1);
            ctx.stroke();
          }
        }

        const glintRadius = Math.max(s.thickness * 4, 7);
        const glintGrad = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, glintRadius);
        glintGrad.addColorStop(0, hexToRgba('#ffffff', clamp(intensity * 0.9, 0, 1)));
        glintGrad.addColorStop(0.3, hexToRgba(s.lineColor, clamp(intensity * 0.6, 0, 0.8)));
        glintGrad.addColorStop(1, hexToRgba(s.lineColor, 0));
        ctx.fillStyle = glintGrad;
        ctx.beginPath();
        ctx.arc(spotX, spotY, glintRadius, 0, TAU);
        ctx.fill();
      }

      ctx.restore();
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const target = aim(s);
      const spinning = s.autoAnimate && !reduce;
      const steering = !!target && target.near > 0;
      if (!state.ready) {
        state.spot = restSpot(s);
        state.level = s.autoAnimate ? 1 : s.idleIntensity;
        state.ready = true;
      }
      let diff = 0;
      if (spinning && !steering) state.spot = wrap(state.spot + (s.speed / TAU) * dt);
      else {
        diff = (steering ? target.spot : restSpot(s)) - state.spot;
        diff -= Math.round(diff);
        state.spot = wrap(state.spot + diff * (1 - Math.exp(-dt * 8)));
      }
      const level = s.autoAnimate ? 1 : s.idleIntensity + (1 - s.idleIntensity) * (target ? target.near : 0);
      state.level += (level - state.level) * (1 - Math.exp(-dt * 7));
      state.press *= Math.exp(-dt * 5);
      draw(s);
      const settling = Math.abs(diff) > 0.0002 || Math.abs(level - state.level) > 0.001 || state.press > 0.002;
      if (settling || (spinning && !steering)) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const wake = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };

    const measure = (entry?: ResizeObserverEntry) => {
      const box = entry?.borderBoxSize?.[0];
      view.width = Math.max(1, box ? box.inlineSize : button.offsetWidth);
      view.height = Math.max(1, box ? box.blockSize : button.offsetHeight);
      view.ratio = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = Math.max(1, Math.round((view.width + PAD * 2) * view.ratio));
      canvas.height = Math.max(1, Math.round((view.height + PAD * 2) * view.ratio));
      if (state.ready) draw(settingsRef.current);
      wake();
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.known = true;
      wake();
    };

    const onPointerDown = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.known = true;
      if (!settingsRef.current.disabled) state.press = 1;
      wake();
    };

    const onPointerEnd = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') return;
      pointer.known = false;
      wake();
    };

    const onPointerLeave = () => {
      pointer.known = false;
      wake();
    };

    const resizeObserver = new ResizeObserver(entries => measure(entries[entries.length - 1]));
    resizeObserver.observe(button);

    // Pause animation when offscreen, resume smoothly when scrolled back in!
    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    intersection.observe(button);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerEnd, { passive: true });
    window.addEventListener('pointercancel', onPointerEnd, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    button.addEventListener('pointerdown', onPointerDown);
    measure();
    wakeRef.current = wake;

    return () => {
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerEnd);
      window.removeEventListener('pointercancel', onPointerEnd);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      button.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  const Component = (href ? 'a' : 'button') as any;

  return (
    <Component
      ref={buttonRef}
      href={href}
      target={href ? (target || '_blank') : undefined}
      rel={href ? (rel || 'noopener noreferrer') : undefined}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      onClick={onClick}
      className={`${BUTTON} ${SIZES[size] ?? SIZES.lg}${className ? ` ${className}` : ''}`}
      style={
        {
          '--sb-radius': `${radius}px`,
          '--sb-tint': tint,
          '--sb-tint-opacity': tintOpacity,
          '--sb-blur': `${blur}px`,
          '--sb-text-color': textColor,
          ...style
        } as CSSProperties
      }
      {...rest}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute -inset-6 z-[1] block h-[calc(100%+48px)] w-[calc(100%+48px)] bg-transparent"
        aria-hidden="true"
      />
      <span className="relative z-[2] inline-flex items-center gap-[inherit]">{children}</span>
    </Component>
  );
};

export default SpecularButton;
