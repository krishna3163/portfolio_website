'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Position {
    x: number
    y: number
}

interface AnimatedCharacterProps {
    messages?: string[]
}

const defaultMessages = [
    "Welcome to the void... 👻",
    "I see you there... 🔮",
    "The darkness whispers...",
    "Follow me into the abyss... 💀",
    "Your soul looks delicious...",
    "Have you seen my head? 🎃",
    "The code never sleeps...",
    "Debug your fears...",
    "404: Sanity not found",
    "I live in the shadows of your console...",
]

type CharacterState = 'idle' | 'walking-left' | 'walking-right' | 'waving' | 'scared'

export default function AnimatedCharacter({ messages = defaultMessages }: AnimatedCharacterProps) {
    const [position, setPosition] = useState<Position>({ x: 100, y: 0 })
    const [targetPosition, setTargetPosition] = useState<Position>({ x: 100, y: 0 })
    const [characterState, setCharacterState] = useState<CharacterState>('idle')
    const [showBubble, setShowBubble] = useState(false)
    const [currentMessage, setCurrentMessage] = useState('')
    const [isFollowing, setIsFollowing] = useState(false)
    const characterRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const lastMousePos = useRef<Position>({ x: 0, y: 0 })

    // Random walk when not following cursor
    useEffect(() => {
        if (isFollowing) return

        const walkInterval = setInterval(() => {
            const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
            const newX = Math.random() * (windowWidth - 100)
            setTargetPosition(prev => ({ ...prev, x: newX }))
        }, 4000 + Math.random() * 3000)

        return () => clearInterval(walkInterval)
    }, [isFollowing])

    // Show random message periodically
    useEffect(() => {
        const messageInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                showRandomMessage()
            }
        }, 8000)

        return () => clearInterval(messageInterval)
    }, [messages])

    const showRandomMessage = useCallback(() => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)]
        setCurrentMessage(randomMessage)
        setShowBubble(true)
        setTimeout(() => setShowBubble(false), 4000)
    }, [messages])

    // Animation loop for smooth movement
    useEffect(() => {
        const animate = () => {
            setPosition(prev => {
                const dx = targetPosition.x - prev.x
                const speed = isFollowing ? 0.08 : 0.02
                const newX = prev.x + dx * speed

                // Update character state based on movement
                if (Math.abs(dx) > 2) {
                    setCharacterState(dx > 0 ? 'walking-right' : 'walking-left')
                } else {
                    setCharacterState('idle')
                }

                return { ...prev, x: newX }
            })
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [targetPosition, isFollowing])

    // Mouse tracking for following behavior
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            lastMousePos.current = { x: e.clientX, y: e.clientY }

            if (characterRef.current) {
                const rect = characterRef.current.getBoundingClientRect()
                const charCenterX = rect.left + rect.width / 2
                const charCenterY = rect.top + rect.height / 2
                const distance = Math.sqrt(
                    Math.pow(e.clientX - charCenterX, 2) +
                    Math.pow(e.clientY - charCenterY, 2)
                )

                // Start following if cursor is close
                if (distance < 200) {
                    setIsFollowing(true)
                    setTargetPosition({ x: e.clientX - 40, y: 0 })
                } else if (distance > 400) {
                    setIsFollowing(false)
                }
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Click handler
    const handleClick = () => {
        setCharacterState('waving')
        showRandomMessage()
        setTimeout(() => setCharacterState('idle'), 1500)
    }

    return (
        <div
            ref={characterRef}
            className={`animated-character ${characterState}`}
            style={{
                left: `${position.x}px`,
                transform: characterState === 'walking-left' ? 'scaleX(-1)' : 'scaleX(1)'
            }}
            onClick={handleClick}
        >
            {/* Speech Bubble */}
            {showBubble && (
                <div className="speech-bubble">
                    <span className="bubble-text">{currentMessage}</span>
                    <div className="bubble-tail"></div>
                </div>
            )}

            {/* Character Body */}
            <div className="character-body">
                {/* Ghost Character */}
                <div className="ghost-shape">
                    <div className="ghost-face">
                        <div className="ghost-eyes">
                            <div className="ghost-eye left"></div>
                            <div className="ghost-eye right"></div>
                        </div>
                        <div className="ghost-mouth"></div>
                    </div>
                    <div className="ghost-bottom">
                        <div className="ghost-wave"></div>
                        <div className="ghost-wave"></div>
                        <div className="ghost-wave"></div>
                    </div>
                </div>

                {/* Glow effect */}
                <div className="character-glow"></div>
            </div>

            {/* Shadow */}
            <div className="character-shadow"></div>
        </div>
    )
}
