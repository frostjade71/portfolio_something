'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const formatted = now.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }) + ' · ' + now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })
            setTime(formatted)
        }

        updateTime()
        const interval = setInterval(updateTime, 60000)
        return () => clearInterval(interval)
    }, [])

    return (
        <footer className="py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-site-bg">
            <div className="max-w-[1200px] mx-auto border-t border-card-border pt-12 md:pt-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left: Branding & Location */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                            Frost
                        </h2>
                        <div className="flex items-center gap-2 text-text-dim text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium">
                            <span>Based in Philippines</span>
                            <span className="w-1 h-1 rounded-full bg-text-dim/30" />
                            <span>{time}</span>
                        </div>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex items-center gap-6 md:gap-8">
                        <a
                            href="https://github.com/frostjade71"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-[10px] md:text-xs font-bold text-text-muted hover:text-white hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest"
                        >
                            <svg className="w-4 h-4 text-text-dim group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.235c-3.338.726-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.805.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/jaderby-pe%C3%B1aranda-830670359"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-[10px] md:text-xs font-bold text-text-muted hover:text-white hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest"
                        >
                            <svg className="w-4 h-4 text-text-dim group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-12 md:mt-16 pt-8 border-t border-card-border/50 text-[8px] md:text-[9px] text-text-dim uppercase tracking-[0.25em] font-medium gap-4">
                    <p>© {new Date().getFullYear()} FROST — ALL RIGHTS RESERVED</p>
                    <p>Built with Next.js & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}
