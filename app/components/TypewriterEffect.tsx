'use client'

import { useState, useEffect, useRef } from 'react'

interface TypewriterEffectProps {
    text: string | string[]
    typingSpeed?: number
    deletingSpeed?: number
    delayAfterTyping?: number
    delayAfterDeleting?: number
    cursor?: boolean
    cursorChar?: string
    cursorBlinkSpeed?: number
    className?: string
}

export default function TypewriterEffect({
    text,
    typingSpeed = 70,
    deletingSpeed = 40,
    delayAfterTyping = 1200,
    delayAfterDeleting = 500,
    cursor = true,
    cursorChar = '|',
    cursorBlinkSpeed = 600,
    className = ''
}: TypewriterEffectProps) {
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const texts = Array.isArray(text) ? text : [text]
        const currentText = texts[loopNum % texts.length]

        const tick = () => {
            if (isDeleting) {
                // Deleting characters
                setDisplayText(prev => currentText.substring(0, prev.length - 1))
            } else {
                // Typing characters
                setDisplayText(prev => currentText.substring(0, prev.length + 1))
            }
        }

        // Determine the next timeout duration
        let timeout: number

        if (!isDeleting && displayText === currentText) {
            // Finished typing, wait before deleting
            timeout = delayAfterTyping
            timerRef.current = setTimeout(() => setIsDeleting(true), timeout)
        } else if (isDeleting && displayText === '') {
            // Finished deleting, move to next word
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            timeout = delayAfterDeleting
            timerRef.current = setTimeout(() => { }, timeout)
        } else {
            // Still typing or deleting
            timeout = isDeleting ? deletingSpeed : typingSpeed
            timerRef.current = setTimeout(tick, timeout)
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [displayText, isDeleting, loopNum, text, typingSpeed, deletingSpeed, delayAfterTyping, delayAfterDeleting])

    return (
        <span
            className={`typewriter ${className}`}
            style={{
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                display: 'inline-block'
            }}
        >
            {displayText}
            {cursor && (
                <span
                    className="typewriter-cursor text-primary ml-0.5 inline-block font-light"
                    style={{
                        animation: `cursorBlink ${cursorBlinkSpeed}ms ease-in-out infinite`
                    }}
                >
                    {cursorChar}
                </span>
            )}
            <style jsx>{`
                @keyframes cursorBlink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </span>
    )
}
