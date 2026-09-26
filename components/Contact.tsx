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



export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10%' })

    return (
        <section ref={ref} id="contact" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-site-bg scroll-mt-32">
            <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-12">
                    {/* Services */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4 md:gap-6 mb-8 md:mb-12"
                        >
                            <svg className="w-8 h-8 md:w-12 md:h-12 text-white/50 flex-shrink-0 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C12 0 12.5 10.5 13.5 11.5C14.5 12.5 24 12 24 12C24 12 14.5 12.5 13.5 13.5C12.5 14.5 12 24 12 24C12 24 11.5 14.5 10.5 13.5C9.5 12.5 0 12 0 12C0 12 9.5 11.5 10.5 10.5C11.5 9.5 12 0 12 0Z" />
                            </svg>
                            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                Get in <span className="text-white">Touch</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                    className="p-5 md:p-6 rounded-2xl bg-card-bg border border-card-border hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-text-dim/80 group-hover:text-white transition-colors duration-300">
                                                {service.icon}
                                            </span>
                                            <h3 className="text-base md:text-lg font-bold text-white group-hover:text-white transition-colors uppercase tracking-tight">
                                                {service.name}
                                            </h3>
                                        </div>
                                        <span className="text-[9px] md:text-[10px] font-bold text-text-dim uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/5">
                                            {service.price}
                                        </span>
                                    </div>
                                    <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-md">
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
                            <a
                                href="https://cal.com/jaderby-penaranda/15min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2.5 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 uppercase tracking-widest text-[11px] md:text-xs"
                            >
                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 text-black/50 group-hover:text-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                Schedule a Meeting
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

                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
