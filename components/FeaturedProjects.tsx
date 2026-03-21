'use client'

import { useEffect, useRef, useState } from 'react'

const featuredProjects = [
    {
        title: 'FacultyLink',
        tech: ['Commisioned Project', 'AI Powered', 'PHP'],
        description: 'A comprehensive Teacher Tracking and Profiling System designed to streamline campus monitoring and academic visibility. This AI-powered platform provides role-based dashboards for administrators, teachers, and students, facilitating real-time status updates and location monitoring while strictly adhering to privacy standards.',
        image: '/img/facultylink-sc.png' as string | null,
        liveLink: 'https://facultylink.online/',
        repoLink: 'https://github.com/frostjade71/FacultyLink',
    },
    {
        title: 'Word Weavers',
        tech: ['Thesis Project','2D Pixel Game', 'Phaser.js'],
        description: 'A web-based educational platform by Group 3 CS Seniors at Holy Cross College of Carigara, developed in partial fulfillment for a B.S. Computer Science degree. Built under the thesis "Developing Educational Games for High School Language Arts: Design Principles and Effectiveness," this interactive platform helps learners improve English skills through immersive games covering vocabulary, grammar, and social learning.',
        image: '/img/wordweavers-sc.jpg' as string | null,
        liveLink: 'https://wordweavershccci.online/',
        repoLink: 'https://github.com/frostjade71/GameDev-G1',
    },
    {
        title: 'Leyeco III Forms Management System',
        tech: ['Internship Project', 'PHP', 'MySQL'],
        description: 'A comprehensive web-based forms and operations management system in fulfillment of the On-the-Job training requirement at LEYECO III (Leyte III Electric Cooperative), enabling efficient online submission, tracking, and management of complaints, meter replacements, and requisition forms.',
        image: '/img/leyeco-sc.png' as string | null,
        liveLink: 'https://leyec.leyeco3portal.com/public/index.php',
        repoLink: 'https://github.com/frostjade71/leyeco_forms-frontend',
    },
]

export default function FeaturedProjects() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const scrollPos = useRef(0)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        let animationId: number

        const scroll = () => {
            if (!isHovered && el && el.firstElementChild) {
                // If user scrolled manually (or momentum scroll), sync our internal position
                if (Math.abs(scrollPos.current - el.scrollLeft) > 1) {
                    scrollPos.current = el.scrollLeft
                }

                scrollPos.current += 0.8 // Base speed
                const halfWidth = el.firstElementChild.clientWidth
                
                if (scrollPos.current >= halfWidth) {
                    scrollPos.current -= halfWidth
                }
                
                el.scrollLeft = scrollPos.current
            }
            animationId = requestAnimationFrame(scroll)
        }

        animationId = requestAnimationFrame(scroll)
        return () => cancelAnimationFrame(animationId)
    }, [isHovered])

    return (
        <section className="py-16 md:py-24 overflow-hidden">
            <div className="px-4 md:px-8 lg:px-12 mb-8 md:mb-12">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim mb-3 md:mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-tight">
                        Selected Works
                    </p>
                </div>
            </div>

            {/* Hybrid Scrolling Marquee */}
            <div className="relative">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-site-bg to-transparent z-10 pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-site-bg to-transparent z-10 pointer-events-none" />

                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    className="flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pt-6 pb-10 w-full"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={`${project.title}-1-${index}`} project={project} />
                        ))}
                    </div>
                    <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={`${project.title}-2-${index}`} project={project} />
                        ))}
                    </div>
                    <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={`${project.title}-3-${index}`} project={project} />
                        ))}
                    </div>
                    <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={`${project.title}-4-${index}`} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project }: { project: typeof featuredProjects[0] }) {
    return (
        <div className="w-[260px] md:w-[350px] shrink-0 bg-card-bg border border-card-border rounded-[1.75rem] md:rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-white/[0.05] group relative overflow-hidden flex flex-col">
            <div className="relative z-10 flex flex-col h-full flex-grow">
                <div className="flex items-center gap-1.5 mb-4 md:mb-6 flex-wrap">
                    {project.tech.map((tech) => (
                        <span 
                            key={tech} 
                            className="text-[8px] uppercase tracking-wider font-bold text-white/50 px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300 leading-tight">
                    {project.title}
                </h3>
                <p className="text-[11px] md:text-xs text-text-muted leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity mb-4 md:mb-5">
                    {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 mt-auto">
                    {project.liveLink && (
                        <a 
                            href={project.liveLink} 
                            className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 px-3 py-1.5 rounded-full"
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
                            className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-text-muted hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300 px-3 py-1.5 rounded-full"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            Repo
                        </a>
                    )}
                </div>

                {/* Preview image */}
                <div className="aspect-[16/9] rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden relative mt-auto">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover object-top opacity-40 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110 scale-100"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/20 group-hover:text-white/40 transition-colors">
                                Coming Soon
                            </span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg/60 to-transparent pointer-events-none" />
                </div>
            </div>
            
            {/* Subtle corner glow */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/[0.02] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.06] group-hover:blur-2xl transition-all duration-700" />
        </div>
    )
}
