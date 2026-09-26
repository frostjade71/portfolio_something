'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

const GitHubCalendar = dynamic(() => import('react-github-calendar').then(mod => mod.GitHubCalendar), {
    ssr: false,
})

export default function GithubActivity() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10%' })
    
    const [tooltipData, setTooltipData] = useState<{ count: number, date: string } | null>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    return (
        <section ref={ref} id="github-activity" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-site-bg scroll-mt-32">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim mb-4">
                        Github
                    </h2>
                    <p className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-white tracking-tight leading-tight">
                        Github Activity
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full flex flex-col items-center [&_article]:flex [&_article]:flex-col [&_article]:items-center [&_footer]:w-full [&_footer]:justify-center [&_footer]:!mt-4 [&_footer]:text-text-dim"
                    onMouseLeave={() => setTooltipData(null)}
                    onMouseMove={(e) => {
                        if (tooltipRef.current) {
                            tooltipRef.current.style.left = `${e.clientX}px`
                            tooltipRef.current.style.top = `${e.clientY}px`
                        }
                    }}
                >
                    <GitHubCalendar 
                        username="frostjade71" 
                        colorScheme="dark"
                        showColorLegend={false}
                        theme={{
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                        renderBlock={(block, activity) => {
                            const date = new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                            return React.cloneElement(block as React.ReactElement, {
                                onMouseEnter: () => setTooltipData({ count: activity.count, date }),
                            })
                        }}
                    />
                </motion.div>
            </div>

            <div 
                ref={tooltipRef}
                className={`fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-[130%] bg-[#1f1f1f] border border-white/10 text-white rounded-lg px-3 py-2 text-xs shadow-xl transition-opacity duration-150 ${tooltipData ? 'opacity-100' : 'opacity-0'}`}
                style={{ left: '-1000px', top: '-1000px' }}
            >
                {tooltipData ? (
                    <><strong>{tooltipData.count} Contributions</strong> on <span className="font-normal">{tooltipData.date}</span></>
                ) : null}
            </div>
        </section>
    )
}
