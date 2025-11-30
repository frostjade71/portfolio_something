'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
    {
        title: 'GameDev-G1',
        description: 'Thesis project - A comprehensive game development platform with innovative features and engaging gameplay mechanics.',
        tech: ['Game Development', 'Programming', 'Design'],
        link: 'https://github.com/frostjade71/GameDev-G1',
        type: 'Thesis Project'
    },
    {
        title: 'Editing Portfolio',
        description: 'Collection of professional video editing work, presets, and creative content available for the community.',
        tech: ['Video Editing', 'Creative Design', 'Content Creation'],
        link: 'https://payhip.com/1eonardofr',
        type: 'Creative Work'
    },
    {
        title: 'Open Source Contributions',
        description: 'Active contributor to various open-source projects, focusing on web development and developer tools.',
        tech: ['JavaScript', 'TypeScript', 'React'],
        link: 'https://github.com/frostjade71',
        type: 'Open Source'
    }
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="projects" className="min-h-screen flex items-center py-20 relative">
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
                            Featured Projects
                        </span>
                    </h2>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <motion.a
                                    key={project.title}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="bg-dark-secondary border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                                >
                                    {/* Project Type Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-mono rounded-full border border-white/10">
                                            {project.type}
                                        </span>
                                        <svg
                                            className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Project Description */}
                                    <p className="text-light-gray mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-lg font-mono border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* View More */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-center mt-12"
                        >
                            <a
                                href="https://github.com/frostjade71"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 group"
                            >
                                <span>View More on GitHub</span>
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
