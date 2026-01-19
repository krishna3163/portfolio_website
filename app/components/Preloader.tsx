'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050814]"
                >
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Ghost Character Recreated for Preloader */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, y: 50 }}
                            animate={{ scale: 1.2, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="character-body mb-8"
                            style={{ width: '100px', height: '120px' }} // Slightly larger for intro
                        >
                            <div className="ghost-shape" style={{ width: '100px', height: '110px' }}>
                                <div className="ghost-face">
                                    <div className="ghost-eyes">
                                        <div className="ghost-eye"></div>
                                        <div className="ghost-eye"></div>
                                    </div>
                                    <div className="ghost-mouth" style={{ background: '#300', height: '15px' }}></div>
                                </div>
                                <div className="ghost-bottom">
                                    <div className="ghost-wave" style={{ width: '34px', background: 'rgba(255, 100, 100, 0.8)' }}></div>
                                    <div className="ghost-wave" style={{ width: '34px', background: 'rgba(255, 100, 100, 0.8)' }}></div>
                                    <div className="ghost-wave" style={{ width: '34px', background: 'rgba(255, 100, 100, 0.8)' }}></div>
                                </div>
                            </div>
                            <div className="character-glow" style={{ background: 'radial-gradient(circle, rgba(204, 0, 0, 0.4) 0%, transparent 70%)' }}></div>
                            <div className="character-shadow"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-red-500 mb-2 tracking-wider glitch" data-text="SUMMONING...">
                                SUMMONING...
                            </h1>
                            <p className="text-red-900/60 font-mono text-sm tracking-[0.5em] uppercase">
                                Preparing the Void
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
