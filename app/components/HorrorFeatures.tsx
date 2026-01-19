'use client'

import React, { useState, useEffect, useCallback } from 'react'

const SCARY_PHRASES = [
    "THEY ARE WATCHING",
    "LOOK BEHIND YOU",
    "SYSTEM CORRUPTED",
    "SOUL NOT FOUND",
    "RUN WHILE YOU CAN",
    "ESCAPE IS IMPOSSIBLE",
    "DATA BLEEDING..."
]

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>/?'

export default function HorrorFeatures() {
    const [alertVisible, setAlertVisible] = useState(false)
    const [alertText, setAlertText] = useState('')

    // Random Jump Scare Alert
    useEffect(() => {
        // Reduced frequency: check every 2 minutes (120000ms)
        // Chance to trigger: 20%
        const checkJumpScare = () => {
            // 20% chance every check
            if (Math.random() < 0.2) {
                const phrase = SCARY_PHRASES[Math.floor(Math.random() * SCARY_PHRASES.length)]
                triggerScare(phrase)
            }

            // Re-schedule
            const nextCheck = 60000 + Math.random() * 120000 // 1-3 minutes
            setTimeout(checkJumpScare, nextCheck)
        }

        const initialTimer = setTimeout(checkJumpScare, 30000) // Start checking after 30s
        return () => clearTimeout(initialTimer)
    }, [])

    const triggerScare = (text: string) => {
        setAlertText(text)
        setAlertVisible(true)

        // Auto hide after random time
        setTimeout(() => {
            setAlertVisible(false)
        }, 3000 + Math.random() * 2000)
    }

    // Text Glitch Effect Handler
    // This effect runs periodically to find text elements and glitch them
    useEffect(() => {
        const glitchTextNodes = () => {
            if (Math.random() > 0.3) return // 30% chance to run

            // Find all paragraphs and headings
            const elements = document.querySelectorAll('p, h1, h2, h3, h4, span')
            if (elements.length === 0) return

            // Pick a random element
            const element = elements[Math.floor(Math.random() * elements.length)] as HTMLElement

            // Only glitch if valid text, not too long, and SAFE (no links/children)
            // Fixes bug where "Sign In" link was destroyed by glitch effect
            if (element.innerText &&
                element.innerText.length < 100 &&
                !element.closest('.horror-alert-overlay') &&
                element.children.length === 0 && // Don't glitch containers with Links/Buttons
                !element.closest('a') &&         // Don't glitch inside links
                !element.closest('button')       // Don't glitch inside buttons
            ) {
                const originalText = element.innerText
                const originalColor = element.style.color

                // Apply glitch
                element.style.color = Math.random() > 0.5 ? '#ff0000' : '#00ff00'
                element.style.textShadow = '2px 0 5px rgba(255,0,0,0.7)'

                // Jumble letters
                const chars = originalText.split('')
                const glitchDuration = 500 + Math.random() * 1000

                let interval = setInterval(() => {
                    const jumbled = chars.map(char =>
                        Math.random() > 0.8 ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)] : char
                    ).join('')
                    element.innerText = jumbled
                }, 50)

                // Reset
                setTimeout(() => {
                    clearInterval(interval)
                    element.innerText = originalText
                    element.style.color = originalColor
                    element.style.textShadow = 'none'
                }, glitchDuration)
            }
        }

        // Run glitch effect attempts every 5-15 seconds
        const glitchInterval = setInterval(glitchTextNodes, 5000 + Math.random() * 10000)
        return () => clearInterval(glitchInterval)
    }, [])

    if (!alertVisible) return null

    return (
        <div className="horror-alert-overlay fade-in">
            <h2 className="horror-alert-text glitch" data-text={alertText}>{alertText}</h2>
            <button className="horror-alert-btn" onClick={() => setAlertVisible(false)}>
                DISMISS
            </button>
        </div>
    )
}
