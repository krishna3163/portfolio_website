'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrolled = window.scrollY
            const height = document.documentElement.scrollHeight - window.innerHeight
            setProgress((scrolled / height) * 100)
        }

        window.addEventListener('scroll', updateProgress)
        updateProgress() // Initial call

        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
            <div
                className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
