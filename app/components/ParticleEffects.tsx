'use client'

import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    rotation: number
    rotationSpeed: number
    opacity: number
    type: 'skull' | 'ghost' | 'spider' | 'bat'
    emoji: string
}

export default function ParticleEffects() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const animationRef = useRef<number | null>(null)

    const emojis = {
        skull: '💀',
        ghost: '👻',
        spider: '🕷️',
        bat: '🦇'
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Create initial particles
        const createParticle = (): Particle => {
            const types: Array<'skull' | 'ghost' | 'spider' | 'bat'> = ['skull', 'ghost', 'spider', 'bat']
            const type = types[Math.floor(Math.random() * types.length)]
            return {
                x: Math.random() * canvas.width,
                y: -50,
                size: 15 + Math.random() * 20,
                speedX: (Math.random() - 0.5) * 1,
                speedY: 0.3 + Math.random() * 0.7,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.05,
                opacity: 0.3 + Math.random() * 0.4,
                type,
                emoji: emojis[type]
            }
        }

        // Initialize particles
        for (let i = 0; i < 15; i++) {
            const particle = createParticle()
            particle.y = Math.random() * canvas.height
            particlesRef.current.push(particle)
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particlesRef.current.forEach((particle, index) => {
                // Update position
                particle.x += particle.speedX
                particle.y += particle.speedY
                particle.rotation += particle.rotationSpeed

                // Slight wave motion
                particle.x += Math.sin(particle.y * 0.02) * 0.3

                // Draw particle
                ctx.save()
                ctx.translate(particle.x, particle.y)
                ctx.rotate(particle.rotation)
                ctx.globalAlpha = particle.opacity
                ctx.font = `${particle.size}px sans-serif`
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillText(particle.emoji, 0, 0)
                ctx.restore()

                // Reset particle if it goes off screen
                if (particle.y > canvas.height + 50 ||
                    particle.x < -50 ||
                    particle.x > canvas.width + 50) {
                    particlesRef.current[index] = createParticle()
                }
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="particle-canvas"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 5
            }}
        />
    )
}
