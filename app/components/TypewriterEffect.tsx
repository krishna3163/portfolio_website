'use client'

import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
    text: string | string[]
    speed?: number
    deleteSpeed?: number
    delay?: number
    waitBeforeDelete?: number
    cursor?: boolean
    className?: string
}

export default function TypewriterEffect({
    text,
    speed = 100,
    deleteSpeed = 50,
    delay = 100,
    waitBeforeDelete = 2000,
    cursor = true,
    className = ''
}: TypewriterEffectProps) {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        // Handle single string case simpler
        if (typeof text === 'string') {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(prev => prev + text[currentIndex])
                    setCurrentIndex(prev => prev + 1)
                }, speed)
                return () => clearTimeout(timeout)
            }
            return
        }

        // Handle array of strings (looping)
        const i = loopNum % text.length
        const fullText = text[i]

        const handleTyping = () => {
            if (isDeleting) {
                setDisplayText(prev => fullText.substring(0, prev.length - 1))
            } else {
                setDisplayText(prev => fullText.substring(0, prev.length + 1))
            }

            // Determine next speed
            let typeSpeed = speed
            if (isDeleting) typeSpeed = deleteSpeed

            // Check if word is finished or deleted
            if (!isDeleting && displayText === fullText) {
                typeSpeed = waitBeforeDelete
                setIsDeleting(true)
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                typeSpeed = 500 // Pause before next word
            }

            return setTimeout(handleTyping, typeSpeed)
        }

        const timer = setTimeout(handleTyping, 100) // Initial kick
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayText, isDeleting, loopNum, text, speed, deleteSpeed, waitBeforeDelete]) // simplified deps

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
                    className="typewriter-cursor text-primary ml-1"
                    style={{ opacity: showCursor ? 1 : 0 }}
                >
                    |
                </span>
            )}
        </span>
    )
}
