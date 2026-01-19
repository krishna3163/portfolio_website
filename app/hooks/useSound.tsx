'use client'

import { useState, useEffect, useCallback } from 'react'

type SoundType = 'ambient' | 'whisper' | 'click' | 'glitch' | 'heartbeat' | 'achievement'

export function useSound() {
    const [isMuted, setIsMuted] = useState(false) // Start unmuted for full horror experience
    const [isAmbientPlaying, setIsAmbientPlaying] = useState(false)
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

    // Initialize Audio Context
    useEffect(() => {
        if (typeof window !== 'undefined' && !audioContext) {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
            setAudioContext(ctx)
        }
    }, [audioContext])

    // Load muted preference
    useEffect(() => {
        const saved = localStorage.getItem('soundMuted')
        if (saved !== null) {
            setIsMuted(saved === 'true')
        }
    }, [])

    // Save muted preference
    const toggleMute = useCallback(() => {
        setIsMuted(prev => {
            const newValue = !prev
            localStorage.setItem('soundMuted', newValue.toString())
            return newValue
        })
    }, [])

    // Play sound effect
    const playSound = useCallback((soundType: SoundType, volume: number = 0.3) => {
        if (isMuted || typeof window === 'undefined') return

        // For now, use Web Audio API to generate simple tones
        // In production, you'd load actual audio files
        if (!audioContext) return

        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        // Different sounds for different events
        switch (soundType) {
            case 'click':
                oscillator.frequency.value = 800
                gainNode.gain.value = volume * 0.1
                oscillator.type = 'sine'
                break
            case 'glitch':
                oscillator.frequency.value = 200
                gainNode.gain.value = volume * 0.15
                oscillator.type = 'sawtooth'
                break
            case 'whisper':
                oscillator.frequency.value = 100
                gainNode.gain.value = volume * 0.05
                oscillator.type = 'sine'
                break
            case 'heartbeat':
                oscillator.frequency.value = 60
                gainNode.gain.value = volume * 0.2
                oscillator.type = 'sine'
                break
            case 'achievement':
                oscillator.frequency.value = 600
                gainNode.gain.value = volume * 0.2
                oscillator.type = 'triangle'
                break
        }

        oscillator.start()
        oscillator.stop(audioContext.currentTime + 0.1)
    }, [isMuted, audioContext])

    // Start ambient loop
    const startAmbient = useCallback(() => {
        if (!isMuted && !isAmbientPlaying) {
            setIsAmbientPlaying(true)
            // In production, load and loop actual ambient audio file
        }
    }, [isMuted, isAmbientPlaying])

    // Stop ambient
    const stopAmbient = useCallback(() => {
        setIsAmbientPlaying(false)
    }, [])

    return {
        isMuted,
        toggleMute,
        playSound,
        startAmbient,
        stopAmbient,
        isAmbientPlaying
    }
}
