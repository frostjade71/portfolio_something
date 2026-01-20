'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

            {/* Gradient orb */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10 -mt-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.8 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mb-8"
                    >
                        <img
                            src="/img/IMG_202511.png"
                            alt="Profile"
                            className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white/20 shadow-2xl mx-auto object-cover"
                        />
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-1 tracking-tight h-[1.2em]"
                    >
                        <TypeAnimation
                            sequence={[
                                "Hello, I'm Frost",
                                1000,
                                "Hello, I'm Jaderby",
                                3000
                            ]}
                            wrapper="span"
                            speed={25}
                            repeat={Infinity}
                            className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                            cursor={true}
                        />
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-light"
                    >
                        Web Enthusiast and Developer • Editor
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-3.5 py-2 sm:px-8 sm:py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-auto sm:w-auto"
                        >
                            View My Work
                        </a>
                        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
                            <a
                                href="#contact"
                                className="px-3 py-2 sm:px-6 sm:py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105 w-auto sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Get In Touch
                            </a>
                            <a
                                href="https://www.canva.com/design/DAG6EsxH-4E/cdpIGLOfu6cP5CBjUpYjhQ/edit?utm_content=DAG6EsxH-4E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 sm:px-6 sm:py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105 w-auto sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Resume
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Bottom Relative to Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: mounted ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    )
}
