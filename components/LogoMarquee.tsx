'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/* Tech stack items styled as brand logos */
const brands = [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'React', icon: 'react' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'PHP', icon: 'php' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Python', icon: 'python' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgres' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'Git', icon: 'git' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Vercel', icon: 'vercel' },

]

const marqueeItems = [...brands, ...brands, ...brands]

export default function LogoMarquee() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section className="py-10 px-4 md:px-8 lg:px-12">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="max-w-[1200px] mx-auto"
            >
                <p className="text-center text-xs text-text-muted tracking-wider uppercase mb-8 font-medium">
                    Tools and Languages i worked with
                </p>

                {/* Marquee */}
                <div className="relative overflow-hidden">
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-site-bg to-transparent z-10 pointer-events-none"></div>
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-site-bg to-transparent z-10 pointer-events-none"></div>

                    <div
                        className="flex items-center animate-marquee"
                        style={{ width: 'max-content' }}
                    >
                        {marqueeItems.map((brand, index) => (
                            <div
                                key={`${brand.name}-${index}`}
                                className="flex-shrink-0 flex items-center gap-2.5 mx-6 md:mx-8"
                            >
                                <img
                                    src={`https://skillicons.dev/icons?i=${brand.icon}&theme=dark`}
                                    alt={brand.name}
                                    className="w-7 h-7 opacity-50"
                                    loading="lazy"
                                />
                                <span className="text-sm text-text-muted font-medium whitespace-nowrap">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
