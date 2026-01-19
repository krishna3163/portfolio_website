'use client'

import dynamic from 'next/dynamic'

// Dynamically import client-side only components
const ParticleEffects = dynamic(() => import('./ParticleEffects'), { ssr: false })
const CursorTrail = dynamic(() => import('./CursorTrail'), { ssr: false })
const AnimatedCharacter = dynamic(() => import('./AnimatedCharacter'), { ssr: false })
const Preloader = dynamic(() => import('./Preloader'), { ssr: false })

export default function ClientEffects() {
    return (
        <>
            <ParticleEffects />
            <Preloader />
            <CursorTrail />
            <AnimatedCharacter />
        </>
    )
}
