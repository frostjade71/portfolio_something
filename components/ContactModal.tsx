'use client'

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import { sendContactEmail } from '@/app/actions/contact'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        emailSuffix: '@gmail.com',
        emailPrefix: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [activeContact, setActiveContact] = useState<'call' | 'email' | 'location' | null>(null)

    const contactMethods = [
        {
            id: 'call' as const,
            label: 'Call Directly',
            value: '+63 969 127 8600',
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        },
        {
            id: 'email' as const,
            label: 'Email Address',
            value: 'jaderbypenaranda@gmail.com',
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 'location' as const,
            label: 'Location',
            value: 'Barugo, Leyte, Philippines',
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ]

    // 3D Hover Logic
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMsg('')
        
        try {
            const result = await sendContactEmail({
                ...formData,
                email: `${formData.emailPrefix}${formData.emailSuffix}`
            })
            if (result.success) {
                setIsSuccess(true)
                setFormData({ name: '', emailPrefix: '', emailSuffix: '@gmail.com', subject: '', message: '' })
                setTimeout(() => {
                    setIsSuccess(false)
                    onClose()
                }, 3000)
            } else {
                setErrorMsg(result.error || 'Failed to send message. Please try again.')
            }
        } catch (err) {
            setErrorMsg('An unexpected error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        onClick={() => setActiveContact(null)}
                        className="relative w-[92vw] md:w-full max-w-4xl max-h-[90vh] bg-[#0d0d0d] border border-white/10 rounded-4xl md:rounded-5xl overflow-y-auto md:overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row z-10 custom-scrollbar"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 md:top-5 right-4 md:right-5 z-20 p-2 text-white/30 hover:text-white transition-all duration-300"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left Side: Contact Information (3D Tilt Card) */}
                        <div className="flex-1 p-5 md:p-10 pt-6 md:pt-20 relative flex flex-col justify-start overflow-visible md:overflow-hidden border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-br from-[#121212] to-[#080808] z-20 md:z-auto">
                            {/* Clipped background elements container */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-t-4xl md:rounded-none">
                                {/* Decorative background glow */}
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
                                {/* Decorative element */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-20" />
                            </div>
                            
                            <motion.div
                                style={{ 
                                    rotateX: rotateX,
                                    rotateY: rotateY,
                                    transformStyle: "preserve-3d"
                                }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="relative z-10 group"
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 tracking-tight flex items-center gap-3">
                                    <span className="w-6 md:w-8 h-[2px] bg-white/20 inline-block" />
                                    Contact Info
                                </h3>
                                
                                {/* Desktop Vertical List */}
                                <div className="hidden md:flex flex-col space-y-8" style={{ transform: "translateZ(30px)" }}>
                                    {contactMethods.map((method) => (
                                        <div key={method.id} className="flex items-start gap-4 group/item cursor-default">
                                            <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 text-white group-hover/item:border-white/30 group-hover/item:bg-white/10 transition-all duration-500 shadow-xl">
                                                {method.icon}
                                            </div>
                                            <div>
                                                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">{method.label}</p>
                                                <p className="text-white font-medium text-base lg:text-lg transition-colors leading-tight">
                                                    {method.id === 'location' ? (
                                                        <>Barugo, Leyte<br/>Philippines</>
                                                    ) : method.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile Icon Row with Tooltips */}
                                <div className="md:hidden flex flex-col items-center" style={{ transform: "translateZ(30px)" }}>
                                    <div className="flex justify-between w-full max-w-[220px] mb-8 px-2">
                                        {contactMethods.map((method) => (
                                            <div key={method.id} className="flex flex-col items-center relative">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveContact(activeContact === method.id ? null : method.id);
                                                    }}
                                                    className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300 relative z-30 ${
                                                        activeContact === method.id 
                                                        ? 'bg-white text-black border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                                                        : 'bg-white/5 text-white/40 border-white/10'
                                                    }`}
                                                >
                                                    {method.icon}
                                                </button>

                                                {/* Tooltip Reveal */}
                                                <AnimatePresence>
                                                    {activeContact === method.id && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                                                            exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                                                            className="absolute top-full mt-3 left-1/2 w-[150px] bg-[#1a1a1a]/98 backdrop-blur-2xl border border-white/10 p-3 rounded-lg shadow-2xl z-[100] text-center"
                                                        >
                                                            {/* Arrow */}
                                                            <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1a1a1a] border-t border-l border-white/10 rotate-45" />
                                                            
                                                            <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">
                                                                {method.label}
                                                            </p>
                                                            <div className="text-white font-bold text-[11px] leading-tight break-words">
                                                                {method.id === 'location' ? (
                                                                    <>Barugo, Leyte,<br/>Philippines</>
                                                                ) : method.value}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-[1.2] p-5 md:p-8 pt-8 md:pt-16 bg-[#0d0d0d]">
                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-wider text-white/60 font-bold ml-1">Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 focus:bg-white/[0.08] transition-all duration-300"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-wider text-white/60 font-bold ml-1">Your Email</label>
                                        <div className="grid grid-cols-[1fr_auto] bg-white/[0.05] border border-white/20 rounded-lg overflow-hidden focus-within:border-white/50 focus-within:bg-white/[0.08] transition-all duration-300">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Username"
                                                className="bg-transparent px-4 py-3 text-[13px] text-white placeholder:text-white/20 focus:outline-none"
                                                value={formData.emailPrefix}
                                                onChange={(e) => setFormData({ ...formData, emailPrefix: e.target.value })}
                                            />
                                            <div className="relative border-l border-white/10 group/select">
                                                <select
                                                    required
                                                    className="appearance-none bg-white/[0.03] text-white/70 pl-3 pr-8 py-3 h-full text-[12px] focus:outline-none cursor-pointer hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                                                    value={formData.emailSuffix}
                                                    onChange={(e) => setFormData({ ...formData, emailSuffix: e.target.value })}
                                                >
                                                    <option value="@gmail.com" className="bg-[#0f0f0f] text-white">@gmail.com</option>
                                                    <option value="@yahoo.com" className="bg-[#0f0f0f] text-white">@yahoo.com</option>
                                                    <option value="@outlook.com" className="bg-[#0f0f0f] text-white">@outlook.com</option>
                                                    <option value="@icloud.com" className="bg-[#0f0f0f] text-white">@icloud.com</option>
                                                    <option value="@hotmail.com" className="bg-[#0f0f0f] text-white">@hotmail.com</option>
                                                </select>
                                                {/* Custom Arrow */}
                                                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-hover/select:text-white/60 transition-colors duration-300">
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-wider text-white/60 font-bold ml-1">Your Subject</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Project Inquiry"
                                        className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 focus:bg-white/[0.08] transition-all duration-300"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-wider text-white/60 font-bold ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Briefly describe your project..."
                                        className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className={`relative w-full py-4 bg-white text-black font-black rounded-lg transition-all duration-300 ${isSubmitting || isSuccess ? 'pointer-events-none opacity-50' : 'hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-[0.98]'} uppercase tracking-[0.3em] text-[10px]`}
                                >
                                    {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
                                </button>

                                {/* Success/Error Messages */}
                                <AnimatePresence mode="wait">
                                    {isSuccess && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-center text-[11px] font-bold uppercase tracking-widest text-green-500/80"
                                        >
                                            Thank you! Your message has been sent.
                                        </motion.p>
                                    )}
                                    {errorMsg && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-center text-[11px] font-bold uppercase tracking-widest text-red-500/80"
                                        >
                                            {errorMsg}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
