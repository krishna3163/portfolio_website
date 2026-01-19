'use client'

import { useEffect, useRef, useState } from 'react'

interface TrailPoint {
    x: number
    y: number
    timestamp: number
}

export default function CursorTrail() {
    const [trail, setTrail] = useState<TrailPoint[]>([])
    const [isVisible, setIsVisible] = useState(true)
    const lastPoint = useRef<{ x: number; y: number } | null>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const newPoint: TrailPoint = {
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            }

            // Only add point if moved enough distance
            if (lastPoint.current) {
                const distance = Math.sqrt(
                    Math.pow(e.clientX - lastPoint.current.x, 2) +
                    Math.pow(e.clientY - lastPoint.current.y, 2)
                )
                if (distance < 5) return
            }

            lastPoint.current = { x: e.clientX, y: e.clientY }

            setTrail(prev => {
                const now = Date.now()
                // Keep only recent points (last 500ms)
                const filtered = prev.filter(p => now - p.timestamp < 500)
                return [...filtered, newPoint].slice(-20)
            })
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [])

    // Cleanup old points
    useEffect(() => {
        const cleanup = setInterval(() => {
            setTrail(prev => {
                const now = Date.now()
                return prev.filter(p => now - p.timestamp < 500)
            })
        }, 50)

        return () => clearInterval(cleanup)
    }, [])

    if (!isVisible) return null

    return (
        <div className="cursor-trail-container">
            {trail.map((point, index) => {
                const age = Date.now() - point.timestamp
                const opacity = Math.max(0, 1 - age / 500)
                const scale = 0.3 + (1 - index / trail.length) * 0.7

                return (
                    <div
                        key={point.timestamp + index}
                        className="trail-point"
                        style={{
                            left: point.x,
                            top: point.y,
                            opacity: opacity * 0.6,
                            transform: `translate(-50%, -50%) scale(${scale})`,
                        }}
                    >
                        <div className="blood-drop"></div>
                    </div>
                )
            })}

            {/* Main cursor glow */}
            {trail.length > 0 && (
                <div
                    className="cursor-glow"
                    style={{
                        left: trail[trail.length - 1]?.x,
                        top: trail[trail.length - 1]?.y,
                    }}
                />
            )}
        </div>
    )
}
