'use client'

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
    const items = [...featuredProjects, ...featuredProjects]

    return (
        <section className="py-24 overflow-hidden">
            <div className="px-4 md:px-8 lg:px-12 mb-12">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Selected Works
                    </p>
                </div>
            </div>

            {/* CSS Marquee - seamless infinite loop */}
            <div className="relative">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-site-bg to-transparent z-10 pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-site-bg to-transparent z-10 pointer-events-none" />

                <div
                    className="flex gap-6 animate-marquee-slow hover:[animation-play-state:paused]"
                    style={{ width: 'max-content' }}
                >
                    {items.map((project, index) => (
                        <div
                            key={`${project.title}-${index}`}
                            className="w-[280px] md:w-[350px] shrink-0 bg-card-bg border border-card-border rounded-[2rem] p-8 transition-all hover:border-white/20 group relative overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-1.5 mb-6 flex-wrap">
                                    {project.tech.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="text-[8px] uppercase tracking-wider font-bold text-white/50 px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-text-secondary transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-text-muted leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity mb-5">
                                    {project.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3 mb-6">
                                    {project.liveLink && (
                                        <a 
                                            href={project.liveLink} 
                                            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
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
                                            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-text-muted hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full transition-all"
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
                                            className="w-full h-full object-cover object-top opacity-40 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 scale-100 transition-transform"
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
                            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/[0.02] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.04] transition-colors duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
