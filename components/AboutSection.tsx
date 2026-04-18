'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" className="py-10 px-4 md:px-8 lg:px-12 scroll-mt-32">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8 }}
                className="max-w-[1200px] mx-auto"
            >
                <div className="bg-card-bg border border-card-border rounded-4xl p-6 md:p-14 lg:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 md:gap-14 items-center">
                        {/* Avatar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-center md:justify-start"
                        >
                            <div className="w-[150px] h-[170px] md:w-[220px] md:h-[250px] rounded-xl md:rounded-2xl overflow-hidden">
                                <img
                                    src="/img/deanslister.jpg"
                                    alt="Jaderby"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.05]"
                                />
                            </div>
                        </motion.div>

                        {/* Text content */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
                            >
                                About Me
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed mb-6 md:mb-8 max-w-lg"
                            >
                                I am a dedicated graduate of Holy Cross College of Carigara Incorporated with a Bachelor of Science in Computer Science. Having been a consistent Dean&apos;s Lister throughout my academic years, I have built strong skills in web development through my studies and hands-on projects. Beyond programming, I also have experience in multimedia arts, including layout design and video editing.
                            </motion.p>

                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                href="#projects"
                                className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300"
                            >
                                <svg className="w-4 h-4 flex-shrink-0 text-white/60 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <motion.span
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={isInView ? { width: 'auto', opacity: 1 } : { width: 0, opacity: 0 }}
                                    transition={{ duration: 1.2, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                    className="overflow-hidden whitespace-nowrap flex items-center gap-2"
                                >
                                    Browse My Work
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
