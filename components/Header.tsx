'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
    { 
        name: 'Home', 
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    { 
        name: 'About', 
        href: '#about',
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        )
    },
    { 
        name: 'Projects', 
        href: '#projects',
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        )
    },
    { 
        name: 'Contact', 
        href: '#contact',
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        
        // Scroll spy logic
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        }

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, observerOptions)
        
        const sectionIds = ['home', 'about', 'projects', 'contact']
        sectionIds.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    return (
        <header className="fixed top-6 md:top-8 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`
                    flex items-center gap-0.5 md:gap-1 p-1 md:p-1.5 rounded-full border transition-all duration-500
                    ${scrolled 
                        ? 'bg-[#141414]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
                        : 'bg-white/5 backdrop-blur-sm border-white/5'}
                `}
            >
                <div className="flex items-center">
                    {navLinks.map((link) => {
                        const href = link.href === '#' ? 'home' : link.href.replace('#', '')
                        const isActive = activeSection === href

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`
                                    px-3 md:px-6 py-2 md:py-2.5 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.12em] md:tracking-[0.15em] transition-all duration-300 rounded-full flex items-center justify-center min-w-[40px] md:min-w-0
                                    ${isActive 
                                        ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                                        : 'text-text-muted md:hover:text-white md:hover:bg-white/10 md:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'}
                                `}
                            >
                                <span className="hidden md:inline">{link.name}</span>
                                <span className="md:hidden flex items-center justify-center">{link.icon}</span>
                            </a>
                        )
                    })}
                </div>
                
                {/* Different button style for Resume */}
                <a
                    href="/Jaderby Peñaranda - Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 md:ml-2 px-4 md:px-7 py-2 md:py-2.5 bg-white text-black text-[9px] md:text-[11px] font-bold rounded-full hover:bg-[#e5e5e5] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] active:translate-y-0 transition-all duration-300 uppercase tracking-[0.12em] md:tracking-[0.15em] shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                >
                    Resume
                </a>
            </motion.nav>
        </header>
    )
}
