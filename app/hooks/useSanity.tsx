'use client'

import { useState, useEffect, useCallback } from 'react'

export function useSanity() {
    const [sanity, setSanity] = useState(100)
    const [lastActivity, setLastActivity] = useState(Date.now())

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('sanity')
        if (saved) {
            setSanity(parseInt(saved))
        }

        // Mark first visit
        const firstVisit = localStorage.getItem('firstVisit')
        if (!firstVisit) {
            localStorage.setItem('firstVisit', Date.now().toString())
        }
    }, [])

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('sanity', sanity.toString())
    }, [sanity])

    // Decay sanity over time
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now()
            const timeSinceActivity = now - lastActivity

            // Decay faster if idle
            const decayRate = timeSinceActivity > 30000 ? 0.5 : 0.1 // 30 seconds idle

            setSanity(prev => {
                const newSanity = Math.max(0, prev - decayRate)
                return newSanity
            })
        }, 10000) // Every 10 seconds

        return () => clearInterval(interval)
    }, [lastActivity])

    // Track user activity
    useEffect(() => {
        const handleActivity = () => {
            setLastActivity(Date.now())
        }

        window.addEventListener('mousemove', handleActivity)
        window.addEventListener('click', handleActivity)
        window.addEventListener('keypress', handleActivity)

        return () => {
            window.removeEventListener('mousemove', handleActivity)
            window.removeEventListener('click', handleActivity)
            window.removeEventListener('keypress', handleActivity)
        }
    }, [])

    // Restore sanity (when clicking ghost or visiting pages)
    const restore = useCallback((amount: number) => {
        setSanity(prev => Math.min(100, prev + amount))
    }, [])

    // Drain sanity (for special events)
    const drain = useCallback((amount: number) => {
        setSanity(prev => Math.max(0, prev - amount))
    }, [])

    // Get sanity level category
    const getSanityLevel = useCallback(() => {
        if (sanity > 70) return 'stable'
        if (sanity > 50) return 'uneasy'
        if (sanity > 30) return 'unstable'
        if (sanity > 10) return 'breaking'
        return 'insane'
    }, [sanity])

    // Check if sanity effects should be active
    const shouldGlitch = sanity < 50
    const shouldShake = sanity < 30
    const shouldDistort = sanity < 10

    return {
        sanity,
        restore,
        drain,
        getSanityLevel,
        shouldGlitch,
        shouldShake,
        shouldDistort
    }
}
