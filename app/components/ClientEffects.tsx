'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import client-side only components
const ParticleEffects = dynamic(() => import('./ParticleEffects'), { ssr: false })
const CursorTrail = dynamic(() => import('./CursorTrail'), { ssr: false })
const AnimatedCharacter = dynamic(() => import('./AnimatedCharacter'), { ssr: false })
const Preloader = dynamic(() => import('./Preloader'), { ssr: false })

export default function ClientEffects() {
    const [enableEffects, setEnableEffects] = useState(true)
    const [enablePet, setEnablePet] = useState(true)

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        // Check if on mobile device (simpler detection)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

        // Disable heavy effects if user prefers reduced motion or on mobile
        if (prefersReducedMotion || isMobile) {
            setEnableEffects(false)
        }

        // Only disable pet on mobile, not on desktop
        if (isMobile) {
            setEnablePet(false)
        }
    }, [])

    return (
        <>
            <Preloader />
            {enableEffects && (
                <>
                    <ParticleEffects />
                    <CursorTrail />
                </>
            )}
            {enablePet && <AnimatedCharacter />}
        </>
    )
}
