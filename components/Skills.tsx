'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Database Design'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
    { category: 'Creative', items: ['Video Editing', 'Photo Editing', 'UI/UX Design'] },
]

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" className="min-h-screen flex items-center py-20 relative">
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
                            Skills & Technologies
                        </span>
                    </h2>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={skillGroup.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-dark-secondary border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-dark-accent transition-all duration-300 group"
                                >
                                    <h3 className="text-xl font-semibold text-white mb-4 font-mono">
                                        {skillGroup.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-white/5 text-light-gray text-sm rounded-lg border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
