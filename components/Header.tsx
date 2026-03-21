'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`
                    flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500
                    ${scrolled 
                        ? 'bg-[#141414]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
                        : 'bg-white/5 backdrop-blur-sm border-white/5'}
                `}
            >
                <div className="flex items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 md:px-6 py-2.5 text-[10px] md:text-[11px] font-bold text-text-muted hover:text-white uppercase tracking-[0.15em] transition-all rounded-full hover:bg-white/5"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                
                {/* Different button style for Resume */}
                <a
                    href="https://www.canva.com/design/DAG6EsxH-4E/cdpIGLOfu6cP5CBjUpYjhQ/edit?utm_content=DAG6EsxH-4E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-5 md:px-7 py-2.5 bg-white text-black text-[10px] md:text-[11px] font-bold rounded-full hover:bg-[#e5e5e5] transition-all uppercase tracking-[0.15em] shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                >
                    Resume
                </a>
            </motion.nav>
        </header>
    )
}
