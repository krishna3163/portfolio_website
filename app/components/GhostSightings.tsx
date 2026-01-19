'use client'

import { useState, useEffect } from 'react'
import './GhostSightings.css'

const GHOST_EMOJIS = ['👻', '💀', '👁️', '🕷️', '🦇', '☠️', '😈', '👹']

export default function GhostSightings() {
    const [activeGhost, setActiveGhost] = useState<{
        emoji: string
        x: number
        y: number
    } | null>(null)

    useEffect(() => {
        const triggerGhostSighting = () => {
            // 2% chance every 30 seconds
            const randomChance = Math.random()
            if (randomChance < 0.02) {
                const emoji = GHOST_EMOJIS[Math.floor(Math.random() * GHOST_EMOJIS.length)]
                const x = Math.random() * (window.innerWidth - 100)
                const y = Math.random() * (window.innerHeight - 100)

                setActiveGhost({ emoji, x, y })

                // Show for 0.3 seconds
                setTimeout(() => {
                    setActiveGhost(null)
                }, 300)
            }
        }

        // Check every 30 seconds
        const interval = setInterval(triggerGhostSighting, 30000)

        return () => clearInterval(interval)
    }, [])

    if (!activeGhost) return null

    return (
        <div
            className="ghost-sighting"
            style={{
                left: `${activeGhost.x}px`,
                top: `${activeGhost.y}px`,
            }}
        >
            {activeGhost.emoji}
        </div>
    )
}
