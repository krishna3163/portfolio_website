'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Component to ensure page starts at the top on refresh/navigation
 * Fulfills "default start with home" type behavior by resetting scroll
 */
export default function ScrollToTop() {
    const pathname = usePathname()

    useEffect(() => {
        // Use a small timeout to ensure DOM is ready and override browser scroll restoration
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // Instant on load, smooth on navigation
            })
        }, 10)

        // Also disable browser's manual scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }

        return () => clearTimeout(timer)
    }, [pathname])

    return null
}
