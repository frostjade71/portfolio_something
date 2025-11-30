'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="min-h-screen flex items-center py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        {/* Main Content */}
                        <div className="bg-dark-secondary border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <p className="text-lg md:text-xl text-light-gray leading-relaxed mb-6">
                                    Hello! I'm <span className="text-white font-semibold">Jaderby Peñaranda</span>,
                                    a Computer Science senior at <span className="text-white font-semibold">HCCCI</span>.
                                </p>

                                <p className="text-lg md:text-xl text-light-gray leading-relaxed mb-6">
                                    I'm passionate about creating innovative solutions through code and bringing
                                    creative visions to life through digital media. My journey spans from developing
                                    complex applications to crafting stunning visual content.
                                </p>

                                <p className="text-lg md:text-xl text-light-gray leading-relaxed">
                                    When I'm not coding, you'll find me exploring new technologies, working on
                                    creative editing projects, or contributing to open-source communities.
                                </p>
                            </motion.div>

                            {/* Stats Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10"
                            >
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">4+</div>
                                    <div className="text-sm text-gray-500 font-mono">Years Coding</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                                    <div className="text-sm text-gray-500 font-mono">Projects</div>
                                </div>
                                <div className="text-center col-span-2 md:col-span-1">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
                                    <div className="text-sm text-gray-500 font-mono">Ideas</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
