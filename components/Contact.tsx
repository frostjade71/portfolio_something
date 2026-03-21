'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
    {
        name: 'Web Applications',
        icon: (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        price: 'Custom Quote',
        description:
            'Building interactive web systems and applications that solve real-world problems and make everyday workflows easier.',
    },
    {
        name: 'Static Websites',
        icon: (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        price: 'Custom Quote',
        description:
            'Designing and building fast, responsive, and visually appealing websites that clearly communicate your brand\'s message..',
    },
]

const processSteps = [
    { number: '01', title: 'Concept', description: 'Defining the core idea and strategy.' },
    { number: '02', title: 'Design', description: 'Crafting the visual and user experience.' },
    { number: '03', title: 'Implementation', description: 'Building with precision and speed.' },
]

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10%' })

    return (
        <section ref={ref} id="contact" className="py-24 px-4 md:px-8 lg:px-12 bg-site-bg">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left side - Services */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 md:mb-12"
                        >
                            <svg className="w-8 h-8 md:w-12 md:h-12 text-white/50 flex-shrink-0 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C12 0 12.5 10.5 13.5 11.5C14.5 12.5 24 12 24 12C24 12 14.5 12.5 13.5 13.5C12.5 14.5 12 24 12 24C12 24 11.5 14.5 10.5 13.5C9.5 12.5 0 12 0 12C0 12 9.5 11.5 10.5 10.5C11.5 9.5 12 0 12 0Z" />
                            </svg>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                How can I help <span className="text-white">you?</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                    className="p-6 md:p-8 rounded-3xl bg-card-bg border border-card-border hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-text-dim/80 group-hover:text-white transition-colors duration-300">
                                                {service.icon}
                                            </span>
                                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-white transition-colors uppercase tracking-tight">
                                                {service.name}
                                            </h3>
                                        </div>
                                        <span className="text-[9px] md:text-[10px] font-bold text-text-dim uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/5">
                                            {service.price}
                                        </span>
                                    </div>
                                    <p className="text-[13px] md:text-sm text-text-muted leading-relaxed max-w-md">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-12"
                        >
                            <a
                                href="mailto:jaderbypenaranda@gmail.com"
                                className="group inline-flex items-center gap-2.5 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] active:translate-y-0 transition-all duration-300 uppercase tracking-widest text-[11px] md:text-xs"
                            >
                                Get In Touch
                                <svg
                                    className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right side - Process & Availability Card */}
                    <div className="lg:w-[400px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="sticky top-24 p-10 rounded-[2.5rem] bg-card-bg border border-card-border overflow-hidden"
                        >
                            {/* Simple Availability Tag */}
                            <div className="inline-flex items-center gap-2.5 mb-10 px-3.5 py-1.5 bg-green-500/5 border border-green-500/20 rounded-full">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                                </span>
                                <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em]">
                                    Currently Available
                                </span>
                            </div>

                            <div className="flex items-center gap-3 mb-8">
                                <svg className="w-5 h-5 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
                                </svg>
                                <h3 className="text-2xl font-bold text-white tracking-tight">Workflow</h3>
                            </div>
                            
                            <div className="space-y-8">
                                {processSteps.map((step) => (
                                    <div key={step.number} className="flex gap-5">
                                        <span className="text-xs font-bold text-text-dim/50 font-mono mt-1">
                                            {step.number}
                                        </span>
                                        <div>
                                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                                                {step.title}
                                            </h4>
                                            <p className="text-xs text-text-muted leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-card-border/50">
                                <p className="text-[10px] text-text-dim/60 leading-relaxed uppercase tracking-widest font-medium">
                                    Working on modern solutions for businesses and individuals worldwide.
                                </p>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
