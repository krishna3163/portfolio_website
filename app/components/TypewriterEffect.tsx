'use client'

import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
    text: string
    speed?: number
    delay?: number
    cursor?: boolean
    onComplete?: () => void
    className?: string
}

export default function TypewriterEffect({
    text,
    speed = 50,
    delay = 0,
    cursor = true,
    onComplete,
    className = ''
}: TypewriterEffectProps) {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        // Initial delay
        const delayTimeout = setTimeout(() => {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(prev => prev + text[currentIndex])
                    setCurrentIndex(prev => prev + 1)
                }, speed + Math.random() * 30) // Slight randomness for realistic effect

                return () => clearTimeout(timeout)
            } else if (!isComplete) {
                setIsComplete(true)
                onComplete?.()
            }
        }, currentIndex === 0 ? delay : 0)

        return () => clearTimeout(delayTimeout)
    }, [currentIndex, text, speed, delay, isComplete, onComplete])

    // Cursor blink effect
    useEffect(() => {
        if (!cursor) return

        const blinkInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 530)

        return () => clearInterval(blinkInterval)
    }, [cursor])

    return (
        <span className={`typewriter ${className}`}>
            {displayText}
            {cursor && (
                <span
                    className="typewriter-cursor"
                    style={{ opacity: showCursor ? 1 : 0 }}
                >
                    |
                </span>
            )}
        </span>
    )
}
