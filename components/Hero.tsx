'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section id="home" className="pt-24 pb-10 px-4 md:px-8 lg:px-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
                className="max-w-[1200px] mx-auto bg-card-bg border border-card-border rounded-[2rem] overflow-hidden relative"
            >
                {/* Top navigation bar */}
                <div className="flex items-center justify-between px-8 md:px-12 pt-8">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">👋</span>
                        <div>
                            <p className="text-sm font-semibold text-white uppercase tracking-tight">Hello, I&apos;m Jaderby.</p>
                            <p className="text-xs text-text-muted">Full-Stack Web Developer • Editor</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Social icons */}
                        <a
                            href="https://github.com/frostjade71"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jaderby-pe%C3%B1aranda-830670359"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Main hero content */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-6 px-8 md:px-12 pt-10 pb-12">
                    <div className="flex flex-col justify-end">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold leading-[1.15] tracking-tight text-white mb-2"
                        >
                            Web Enthusiast and Developer driven to build web systems that make users&apos; lives easier.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.35 }}
                            className="mt-5 text-sm md:text-[15px] text-text-secondary leading-relaxed max-w-md"
                        >
                            Hi, I&apos;m Jaderby, Welcome to my corner of the web. I love building and designing websites and web systems using modern technologies.
                        </motion.p>
                    </div>

                    {/* Profile image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.95 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden md:flex items-end justify-end"
                    >
                        <div className="relative">
                            <div className="w-[220px] lg:w-[260px] h-[260px] lg:h-[300px] rounded-3xl overflow-hidden">
                                <img
                                    src="/img/IMG_202511.png"
                                    alt="Jaderby Peñaranda"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
