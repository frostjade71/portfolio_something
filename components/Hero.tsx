'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

            {/* Gradient orb */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Jaderby Peñaranda
                        </span>
                    </motion.h1>

                    {/* Title */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl lg:text-3xl text-light-gray mb-8 font-light"
                    >
                        Computer Science Senior @ HCCCI
                    </motion.p>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto font-mono"
                    >
                        Developer • Editor • Tech Enthusiast
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                        >
                            View Projects
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: mounted ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-white rounded-full"
                            ></motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
