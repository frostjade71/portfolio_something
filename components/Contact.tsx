'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
    {
        name: 'Web Applications',
        price: 'Custom Quote',
        description:
            'Building complex, interactive web systems and applications that solve real-world problems and streamline workflows.',
    },
    {
        name: 'Static Websites',
        price: 'Custom Quote',
        description:
            'Designing and developing fast, responsive, and visually stunning static websites that effectively communicate your brand\'s message.',
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
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight"
                        >
                            How can I help <span className="text-white">you?</span>
                        </motion.h2>

                        <div className="space-y-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                    className="p-8 rounded-3xl bg-card-bg border border-card-border hover:border-text-dim/30 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-text-secondary transition-colors uppercase tracking-tight">
                                            {service.name}
                                        </h3>
                                        <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/5">
                                            {service.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-text-muted leading-relaxed max-w-md">
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
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all uppercase tracking-widest text-xs"
                            >
                                Get In Touch
                                <svg
                                    className="w-4 h-4"
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
                            <div className="flex items-center gap-2 mb-10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">
                                    Currently Available
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Workflow</h3>
                            
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
