'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
    { 
        category: 'Languages', 
        items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'Node.js', 'Next.js', 'Tailwind', 'Python', 'MySQL', 'MongoDB', 'Docker'],
        icons: 'js,ts,html,css,php,nodejs,nextjs,tailwind,python,mysql,mongodb,docker'
    },
    { category: 'Multimedia Arts', items: ['Layout Design', 'Graphic Design', 'Video Editing'] },
    { 
        category: 'Tools', 
        items: ['Canva', 'Photoshop', 'Alight Motion', 'VS Code', 'Figma', 'Git'],
        customIcons: true,
        toolIcons: [
            { name: 'Canva', src: '/icons/canva.png' },
            { name: 'Photoshop', skillicon: 'ps' },
            { name: 'Alight Motion', src: '/icons/alightmotion.png' },
        ],
        icons: 'vscode,figma,git'
    },
    { category: 'Teamwork & Collaboration', items: ['Communication', 'Adaptibility', 'Time Management'] },
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
                                    
                                    {/* Categories with Icons */}
                                    {skillGroup.customIcons ? (
                                        /* Tools with mixed custom and skill icons */
                                        <div className="flex flex-wrap gap-3 justify-center items-center">
                                            {/* Custom local icons and individual skillicons */}
                                            {skillGroup.toolIcons?.map((tool) => (
                                                <div key={tool.name} className="w-12 h-12 flex items-center justify-center">
                                                    {tool.src ? (
                                                        <img 
                                                            src={tool.src}
                                                            alt={tool.name}
                                                            className="w-12 h-12 object-contain"
                                                            title={tool.name}
                                                        />
                                                    ) : tool.skillicon ? (
                                                        <img 
                                                            src={`https://skillicons.dev/icons?i=${tool.skillicon}&theme=dark`}
                                                            alt={tool.name}
                                                            className="w-12 h-12 object-contain"
                                                            title={tool.name}
                                                        />
                                                    ) : null}
                                                </div>
                                            ))}
                                            {/* Skillicons */}
                                            {skillGroup.icons && (
                                                <img 
                                                    src={`https://skillicons.dev/icons?i=${skillGroup.icons}&theme=dark`}
                                                    alt="Development Tools"
                                                    className="h-12"
                                                />
                                            )}
                                        </div>
                                    ) : skillGroup.icons ? (
                                        /* Languages with skillicons only */
                                        <div className="flex flex-col gap-3 items-center">
                                            <img 
                                                src={`https://skillicons.dev/icons?i=${skillGroup.icons}&theme=dark${skillGroup.category === 'Languages' ? '&perline=6' : ''}`}
                                                alt={skillGroup.category}
                                                className={`w-full ${skillGroup.category === 'Languages' ? 'max-w-md' : 'max-w-xs'}`}
                                            />
                                        </div>
                                    ) : (
                                        /* Other categories with text badges */
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
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
