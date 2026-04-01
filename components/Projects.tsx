'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
    {
        title: 'Celestial Network',
        tech: ['Landing Page', 'Minecraft', 'Discord'],
        description: 'A Minecraft community landing page designed for Celestial Network',
        liveLink: 'https://celestial-network.vercel.app/',
        repoLink: 'https://github.com/frostjade71/celestial_network',
        image: '/img/celestial.png' as string | null,
    },
    {
        title: 'Git Glyph',
        tech: ['Summary Cards', 'TypeScript', 'React'],
        description: 'A GitHub Summary Card Generator designed for developers to showcase their profiles with style',
        liveLink: 'https://git-glyph-sigma.vercel.app/',
        repoLink: 'https://github.com/frostjade71/git-glyph',
        image: '/img/gitglyph-sc.png' as string | null,
    },
    {
        title: 'SQLviz',
        tech: ['TypeScript', 'React', 'Tool for Developers'],
        description: 'A SQL Schema Visualizer for developers and DBAs who need to explore MySQL and PostgreSQL DDL schemas',
        liveLink: 'https://sqlviz-olive.vercel.app/',
        repoLink: 'https://github.com/frostjade71/sqlviz',
        image: '/img/sqlviz-sc.png' as string | null,
    },
    {
        title: 'HR Payroll Management System',
        tech: ['React', 'Vite', 'Payment Gateway'],
        description: 'A modern, frontend-only HR Payroll Management System dashboard designed for businesses to manage their employees and track attendance.',
        liveLink: 'https://hrm-employee-payroll.vercel.app/',
        repoLink: 'https://github.com/frostjade71/HRM-Employee-Payroll',
        image: '/img/hr-sc.png' as string | null,
    },
    {
        title: 'CozyCorner',
        tech: ['Booking', 'React', 'TypeScript'],
        description: 'Hotel Booking Management System designed for solo and business travelers.',
        liveLink: 'https://cozy-corner-eta.vercel.app/',
        repoLink: 'https://github.com/frostjade71/CozyCorner',
        image: '/img/cozycorner-sc.png' as string | null,
    },
    {
        title: 'WriteLoft',
        tech: ['TypeScript', 'React', 'Tool for Students'],
        description: 'A real-time collaborative note-taking web app designed for teams, students, and project groups with instant synchronization.',
        liveLink: 'https://write-loft.vercel.app/',
        repoLink: 'https://github.com/frostjade71/WriteLoft',
        image: '/img/writeloft-sc.png' as string | null,
    },
    {
        title: 'GWA Calculator',
        tech: ['TypeScript', 'React', 'Tool for Students'],
        description: 'The GWA Calculator helps college students easily track and calculate their General Weighted Average.',
        liveLink: 'https://gwa-calculator-hccci.vercel.app/',
        repoLink: 'https://github.com/frostjade71/gwa_calculator',
        image: '/img/gwa-sc.png' as string | null,
    },
    {
        title: 'myHCCCI',
        tech: ['Social Platform', 'CRUD', 'Community'],
        description: "myHCCCI is a social media platform developed to connect students across Holy Cross College of Carigara's departments.",
        liveLink: null,
        repoLink: 'https://github.com/frostjade71/myhccci',
        image: '/img/myhccci.webp' as string | null,
    },
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10%' })

    return (
        <section id="projects" className="py-24 px-4 md:px-8 lg:px-12">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-16">
                    <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim mb-4">
                        Archive
                    </h2>
                    <p className="text-3xl md:text-[2.5rem] font-bold text-white tracking-tight leading-tight">
                        Recent Projects
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </motion.div>
                
                {/* More Projects Button */}
                <div className="mt-12 md:mt-16 flex justify-center">
                    <motion.a
                        href="https://github.com/frostjade71"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold rounded-full hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] active:translate-y-0 transition-all duration-300 uppercase tracking-widest text-[10px]"
                    >
                        More Projects
                        <svg className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({
    project,
    index,
    isInView,
}: {
    project: (typeof projects)[number]
    index: number
    isInView: boolean
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group block bg-card-bg border border-card-border rounded-[1.75rem] overflow-hidden hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-white/[0.05] transition-all duration-500 flex flex-col h-full"
        >
            {/* Screenshot area */}
            {project.image ? (
                <div className="relative h-[160px] md:h-[240px] overflow-hidden bg-[#0e0e0e] shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                    {/* Subtle gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-16 md:h-20 bg-gradient-to-t from-card-bg to-transparent" />
                </div>
            ) : (
                <div className="relative h-[160px] md:h-[240px] overflow-hidden bg-[#0e0e0e] flex items-center justify-center shrink-0">
                    <div className="text-text-dim text-4xl md:text-6xl font-serif italic">✦</div>
                    <div className="absolute inset-x-0 bottom-0 h-16 md:h-20 bg-gradient-to-t from-card-bg to-transparent" />
                </div>
            )}

            {/* Info area */}
            <div className="px-5 md:px-7 py-5 md:py-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 md:gap-2 mb-3 flex-wrap">
                    {project.tech.map((tech) => (
                        <span 
                            key={tech} 
                            className="text-[8px] md:text-[9px] uppercase tracking-wider font-bold text-text-dim px-2 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
                    {project.title}
                </h3>
                <p className="text-[13px] md:text-sm text-text-muted leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-auto flex items-center gap-3">
                    {project.liveLink && (
                        <a 
                            href={project.liveLink} 
                            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 px-3 py-1.5 rounded-full"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Preview
                        </a>
                    )}
                    {project.repoLink && (
                        <a 
                            href={project.repoLink} 
                            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-text-muted hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300 px-3 py-1.5 rounded-full"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            Repo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
