'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'flip'
    delay?: number
    duration?: number
    threshold?: number
    className?: string
}

export default function ScrollReveal({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    className = ''
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay)
                    observer.unobserve(entry.target)
                }
            },
            { threshold }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay, threshold])

    const getAnimationStyles = () => {
        const baseStyles = {
            transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            opacity: isVisible ? 1 : 0,
        }

        const animations: Record<string, React.CSSProperties> = {
            'fade-up': {
                ...baseStyles,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            },
            'fade-down': {
                ...baseStyles,
                transform: isVisible ? 'translateY(0)' : 'translateY(-40px)',
            },
            'fade-left': {
                ...baseStyles,
                transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
            },
            'fade-right': {
                ...baseStyles,
                transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
            },
            'zoom': {
                ...baseStyles,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            },
            'flip': {
                ...baseStyles,
                transform: isVisible ? 'perspective(1000px) rotateX(0deg)' : 'perspective(1000px) rotateX(-10deg)',
            },
        }

        return animations[animation] || baseStyles
    }

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${className}`}
            style={getAnimationStyles()}
        >
            {children}
        </div>
    )
}
