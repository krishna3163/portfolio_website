'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
    const roles = [
        'Blockchain Developer',
        'Problem Solver',
        'Web Developer',
        'React Developer',
        'Next.js Developer'
    ]

    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2500) // Change every 2.5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
            {/* Content */}
            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Greeting with wave */}
                    <h1 className="text-5xl md:text-7xl font-light mb-6">
                        Hey <span className="inline-block animate-wave origin-[70%_70%]">👋</span>, I'm{' '}
                        <span className="font-display font-bold italic">Krishna</span>
                    </h1>

                    {/* Role with rotating text */}
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 min-h-[80px] md:min-h-[100px] flex items-center justify-center">
                        <span className="mr-3">I'm a</span>
                        <motion.span
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-r from-primary via-purple-400 to-primary/80 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                        >
                            {roles[currentRole]}
                        </motion.span>
                    </h2>

                    {/* Welcome message */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        You've stumbled upon my little heaven on the web;<br />
                        Welcome and feel at home!
                    </p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
