'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useSanity } from '../hooks/useSanity'

interface Position {
    x: number
    y: number
}

interface AnimatedCharacterProps {
    messages?: string[]
    onGhostClick?: () => void
}

const defaultMessages = [
    "I'm watching you... 👁️",
    "I see where your cursor goes... 🔮",
    "Nice click! I felt that... 💀",
    "You moved your mouse... I know... 👻",
    "I can sense your every move... 🕷️",
    "Did you just click that? I saw it... 😈",
    "Your screen looks interesting from here... 📺",
    "I'm always watching... always... 👁️👁️",
    "You can't hide from me... 🌙",
    "I see everything you do... EVERYTHING... 💀",
    "Moving fast, aren't we? 🏃",
    "That button you're hovering over? I see it... 🎯",
    "Click click click... I'm counting... 🧮",
    "Your cursor is mine to follow... 🔗",
    "I live in the shadows of your screen... 🖥️",
    "Every click echoes in the void... 🔊",
    "Scrolling again? I never get dizzy... 🌀",
    "I know what you're about to click... 🔮",
    "Your mouse movements feed me... 🍽️",
    "404: Privacy not found... 👁️"
]

const clickMessages = [
    "I felt that click! 💥",
    "CLICK! ...I heard it... 👂",
    "You clicked! How exciting... 😈",
    "Another click for my collection... 📦",
    "Click detected. Noted. Remembered. 📝",
    "That click was... delicious... 🍴",
    "Your clicks fuel me... ⚡",
    "CLICK! ...the sound of your doom... ☠️"
]

const hoverMessages = [
    "Hovering there? I see you... 👁️",
    "Thinking about clicking? I sense it... 🤔",
    "Interesting choice you're considering... 🎯",
    "Your hesitation amuses me... 😏",
    "I know what you're looking at... 👀"
]

type CharacterState = 'idle' | 'walking-left' | 'walking-right' | 'waving' | 'scared'

export default function AnimatedCharacter({ messages = defaultMessages, onGhostClick }: AnimatedCharacterProps) {
    const [position, setPosition] = useState<Position>({ x: 100, y: 0 })
    const [targetPosition, setTargetPosition] = useState<Position>({ x: 100, y: 0 })
    const [characterState, setCharacterState] = useState<CharacterState>('idle')
    const [showBubble, setShowBubble] = useState(false)
    const [currentMessage, setCurrentMessage] = useState('')
    const [isFollowing, setIsFollowing] = useState(false)
    const characterRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const lastMousePos = useRef<Position>({ x: 0, y: 0 })
    const lastClickTime = useRef<number>(0)
    const mouseSpeed = useRef<number>(0)
    const { restore } = useSanity()

    // Track mouse clicks
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const now = Date.now()
            // Only show message if not clicked recently
            if (now - lastClickTime.current > 3000) {
                const message = clickMessages[Math.floor(Math.random() * clickMessages.length)]
                setCurrentMessage(message)
                setShowBubble(true)
                setTimeout(() => setShowBubble(false), 3000)
                lastClickTime.current = now

                // Make character jump or react
                setCharacterState('scared')
                setTimeout(() => setCharacterState('idle'), 800)
            }
        }

        window.addEventListener('click', handleClick)
        return () => window.removeEventListener('click', handleClick)
    }, [])

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
            if (Math.random() > 0.6 && !showBubble) {
                showRandomMessage()
            }
        }, 5000)

        return () => clearInterval(messageInterval)
    }, [messages, showBubble])

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
        let lastCheckTime = Date.now()

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now()
            const timeDelta = now - lastCheckTime

            // Calculate mouse speed
            if (lastMousePos.current.x !== 0) {
                const distance = Math.sqrt(
                    Math.pow(e.clientX - lastMousePos.current.x, 2) +
                    Math.pow(e.clientY - lastMousePos.current.y, 2)
                )
                mouseSpeed.current = distance / Math.max(timeDelta, 1)

                // React to fast mouse movements
                if (mouseSpeed.current > 2 && Math.random() > 0.95 && !showBubble) {
                    const speedMessages = [
                        "Woah! Slow down! 💨",
                        "You're moving so fast! 🏃",
                        "I can barely keep up! 😵",
                        "Where are you rushing to? 🌪️"
                    ]
                    setCurrentMessage(speedMessages[Math.floor(Math.random() * speedMessages.length)])
                    setShowBubble(true)
                    setTimeout(() => setShowBubble(false), 2500)
                }
            }

            lastMousePos.current = { x: e.clientX, y: e.clientY }
            lastCheckTime = now

            if (characterRef.current) {
                const rect = characterRef.current.getBoundingClientRect()
                const charCenterX = rect.left + rect.width / 2
                const charCenterY = rect.top + rect.height / 2
                const distance = Math.sqrt(
                    Math.pow(e.clientX - charCenterX, 2) +
                    Math.pow(e.clientY - charCenterY, 2)
                )

                // Start following if cursor is close
                if (distance < 250) {
                    setIsFollowing(true)
                    setTargetPosition({ x: e.clientX - 40, y: 0 })

                    // Sometimes show hover message
                    if (distance < 100 && Math.random() > 0.97 && !showBubble) {
                        const message = hoverMessages[Math.floor(Math.random() * hoverMessages.length)]
                        setCurrentMessage(message)
                        setShowBubble(true)
                        setTimeout(() => setShowBubble(false), 2500)
                    }
                } else if (distance > 500) {
                    setIsFollowing(false)
                }
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [showBubble])

    // Click handler
    const handleClick = () => {
        setCharacterState('waving')
        showRandomMessage()
        restore(15) // Restore 15 sanity when clicking ghost
        onGhostClick?.()
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
