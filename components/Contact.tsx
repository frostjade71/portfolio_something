'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import ContactModal from './ContactModal'

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
    const [isModalOpen, setIsModalOpen] = useState(false)
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
                            className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4 md:gap-6 mb-8 md:mb-12"
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
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                            className="mt-12 flex justify-center md:justify-start"
                        >
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group inline-flex items-center gap-2.5 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] active:translate-y-0 transition-all duration-300 uppercase tracking-widest text-[11px] md:text-xs"
                            >
                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 text-black/50 group-hover:text-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
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
                            </button>
                        </motion.div>
                    </div>

                    {/* Right side - Process & Availability Card */}
                    <div className="lg:w-[420px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="sticky top-24 p-8 md:p-10 rounded-[3rem] bg-card-bg/60 backdrop-blur-xl border border-white/5 overflow-hidden group/card shadow-2xl relative"
                        >
                            {/* Animated Background Mesh */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl pointer-events-none group-hover/card:bg-white/[0.05] transition-colors duration-700" />
                            
                            {/* Availability Tag */}
                            <div className="relative inline-flex items-center gap-3 mb-12 px-4 py-2 bg-black/40 border border-white/5 rounded-full shadow-inner">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500/40"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                </span>
                                <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em] leading-none">
                                    Available Now
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mb-10">
                                <span className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-text-dim group-hover/card:text-white transition-colors duration-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </span>
                                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Workflow</h3>
                            </div>
                            
                            <div className="relative space-y-12">
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-[22px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-white/10 via-white/10 to-transparent" />

                                {processSteps.map((step, idx) => (
                                    <motion.div 
                                        key={step.number} 
                                        className="relative flex gap-6 group/item"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                        transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                                    >
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="w-[46px] h-[46px] flex items-center justify-center rounded-2xl bg-black border border-white/10 group-hover/item:border-white/30 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                                                <span className="text-[11px] font-black text-white/40 group-hover/item:text-white transition-colors">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-0.5">
                                            <h4 className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-[0.15em] mb-2 group-hover/item:text-white transition-colors">
                                                {step.title}
                                                {idx === 0 && (
                                                    <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.456-2.455L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                                                    </svg>
                                                )}
                                                {idx === 1 && (
                                                    <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-3.012 3.011 3.375 3.375 0 008.195-1.008 3.375 3.375 0 006.115-3.151C20.407 14.204 21 12.673 21 11.026c0-4.432-4.03-8.026-9-8.026s-9 3.594-9 8.026c0 1.637.545 3.161 1.464 4.398l.819.527a2.25 2.25 0 011.01 2.923" />
                                                    </svg>
                                                )}
                                                {idx === 2 && (
                                                    <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758" />
                                                    </svg>
                                                )}
                                            </h4>
                                            <p className="text-[13px] text-text-muted leading-relaxed max-w-[240px]">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-14 pt-8 border-t border-white/5">
                                <p className="text-[10px] text-text-dim font-bold uppercase tracking-[0.2em] leading-normal">
                                    Working on modern solutions for businesses and individuals worldwide.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
