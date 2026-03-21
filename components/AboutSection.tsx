'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" className="py-10 px-4 md:px-8 lg:px-12">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8 }}
                className="max-w-[1200px] mx-auto"
            >
                <div className="bg-card-bg border border-card-border rounded-[2rem] p-8 md:p-14 lg:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 md:gap-14 items-center">
                        {/* Avatar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-center md:justify-start"
                        >
                            <div className="w-[180px] h-[200px] md:w-[220px] md:h-[250px] rounded-3xl overflow-hidden">
                                <img
                                    src="/img/IMG_202511.png"
                                    alt="Jaderby"
                                    className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-[1.02]"
                                />
                            </div>
                        </motion.div>

                        {/* Text content */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
                            >
                                About Me
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-sm md:text-[14px] text-text-secondary leading-relaxed mb-8 max-w-lg"
                            >
                                I am a dedicated college senior at Holy Cross College of Carigara Incorporated, pursuing a Bachelor of Science in Computer Science. I have been on the Dean&apos;s List since my first year, building strong skills in web development through my classes and hands-on projects. Beyond programming, I also have experience in multimedia arts, including layout design, and video editing-skills.
                            </motion.p>

                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                href="#projects"
                                className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-text-secondary transition-colors"
                            >
                                Browse My Work
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
