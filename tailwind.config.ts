import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'site-bg': '#0a0a0a',
                'card-bg': '#141414',
                'card-border': '#1f1f1f',
                'card-hover': '#1a1a1a',
                'text-primary': '#ffffff',
                'text-secondary': '#999999',
                'text-muted': '#666666',
                'text-dim': '#444444',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['DM Serif Display', 'Georgia', 'serif'],
            },
            animation: {
                'fade-in': 'fadeInUp 0.8s ease-out',
                'fade-in-delay': 'fadeInUp 0.8s ease-out 0.2s both',
                'marquee': 'marquee 40s linear infinite',
                'marquee-reverse': 'marquee-reverse 40s linear infinite',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}
export default config
