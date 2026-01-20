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
    { 
        category: 'Multimedia Arts', 
        items: ['Layout Design', 'Graphic Design', 'Video Editing'],
        simpleIcons: true,
        simpleIconItems: [
            { 
                name: 'Layout Design', 
                svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            },
            { 
                name: 'Graphic Design', 
                svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            },
            { 
                name: 'Video Editing', 
                svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            }
        ]
    },
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
    { 
        category: 'Teamwork & Collaboration', 
        items: ['Time Management', 'Communication', 'Adaptibility'],
        simpleIcons: true,
        simpleIconItems: [
            { 
                name: 'Time Management', 
                svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            },
            { 
                name: 'Communication', 
                svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            },
            { 
                name: 'Adaptibility', 
                svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            }
        ]
    },
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
                                    <h3 className="text-xl font-semibold text-white mb-6 font-mono relative group w-fit">
                                        {skillGroup.category}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                                    </h3>
                                    
                                    {/* Categories with Icons */}
                                    {skillGroup.simpleIcons ? (
                                        /* Category with simple SVG icons */
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                                            {skillGroup.simpleIconItems?.map((item: any) => (
                                                <div key={item.name} className="flex items-center gap-3 group/item">
                                                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-gray-400 group-hover/item:text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-xl group-hover/item:border-white/20 group-hover/item:bg-white/10">
                                                        {item.svg}
                                                    </div>
                                                    <span className="text-sm font-semibold text-gray-400 group-hover/item:text-white transition-colors duration-300 font-mono">
                                                        {item.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : skillGroup.customIcons ? (
                                        /* Tools with mixed custom and skill icons */
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                                            {/* Custom local icons and individual skillicons */}
                                            {skillGroup.toolIcons?.map((tool) => (
                                                <div key={tool.name} className="flex items-center gap-3 group/item">
                                                    {tool.src ? (
                                                        <img 
                                                            src={tool.src}
                                                            alt={tool.name}
                                                            className="w-10 h-10 flex-shrink-0 object-contain transition-transform duration-300 group-hover/item:scale-110"
                                                        />
                                                    ) : tool.skillicon ? (
                                                        <img 
                                                            src={`https://skillicons.dev/icons?i=${tool.skillicon}&theme=dark`}
                                                            alt={tool.name}
                                                            className="w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                                                        />
                                                    ) : null}
                                                    <span className="text-sm font-semibold text-gray-400 group-hover/item:text-white transition-colors duration-300 font-mono">
                                                        {tool.name}
                                                    </span>
                                                </div>
                                            ))}
                                            {/* Skillicons for VS Code, Figma, Git etc */}
                                            {skillGroup.icons && skillGroup.icons.split(',').map((icon) => {
                                                // Map icon id to clean label
                                                const labelMap: { [key: string]: string } = {
                                                    'vscode': 'VS Code',
                                                    'figma': 'Figma',
                                                    'git': 'Git'
                                                };
                                                const label = labelMap[icon] || icon;
                                                return (
                                                    <div key={icon} className="flex items-center gap-3 group/item">
                                                        <img 
                                                            src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                                                            alt={label}
                                                            className="w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                                                        />
                                                        <span className="text-sm font-semibold text-gray-400 group-hover/item:text-white transition-colors duration-300 font-mono">
                                                            {label}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : skillGroup.icons ? (
                                        /* Languages with skillicons only */
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                                            {skillGroup.icons.split(',').map((icon, idx) => (
                                                <div key={icon} className="flex items-center gap-3 group/item">
                                                    <img 
                                                        src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                                                        alt={skillGroup.items[idx]}
                                                        className="w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                                                    />
                                                    <span className="text-sm font-semibold text-gray-400 group-hover/item:text-white transition-colors duration-300 font-mono">
                                                        {skillGroup.items[idx]}
                                                    </span>
                                                </div>
                                            ))}
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
