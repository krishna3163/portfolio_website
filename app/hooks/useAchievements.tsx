'use client'

import { useState, useEffect, useCallback } from 'react'

export interface Achievement {
    id: string
    name: string
    description: string
    icon: string
    unlocked: boolean
    unlockedAt?: Date
}

const ACHIEVEMENTS: Achievement[] = [
    { id: 'first_visit', name: 'Soul Captured', description: 'Visited the haunted portfolio', icon: '👻', unlocked: false },
    { id: 'dashboard', name: 'Inner Sanctum', description: 'Reached the Dashboard', icon: '🔮', unlocked: false },
    { id: 'all_pages', name: 'Void Walker', description: 'Visited all pages', icon: '🚶', unlocked: false },
    { id: 'ghost_clicks', name: 'Vexed the Spirit', description: 'Clicked the ghost 10 times', icon: '👆', unlocked: false },
    { id: 'sanity_zero', name: 'Embraced Madness', description: 'Let sanity reach 0%', icon: '😵', unlocked: false },
    { id: 'terminal_use', name: 'Hacker', description: 'Used the forbidden terminal', icon: '⌨️', unlocked: false },
    { id: 'sound_on', name: 'Brave Soul', description: 'Enabled the cursed sounds', icon: '🔊', unlocked: false },
    { id: 'theme_master', name: 'Reality Bender', description: 'Switched between all themes', icon: '🎨', unlocked: false },
    { id: 'journal_reader', name: 'Knowledge Seeker', description: 'Read the Journal of Madness', icon: '📖', unlocked: false },
    { id: 'graveyard', name: 'Grave Robber', description: 'Explored the Project Graveyard', icon: '⚰️', unlocked: false },
]

export function useAchievements() {
    const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS)
    const [showToast, setShowToast] = useState(false)
    const [toastAchievement, setToastAchievement] = useState<Achievement | null>(null)

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('achievements')
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                setAchievements(parsed)
            } catch (e) {
                console.error('Failed to load achievements')
            }
        }
    }, [])

    // Save to localStorage
    const saveAchievements = useCallback((newAchievements: Achievement[]) => {
        localStorage.setItem('achievements', JSON.stringify(newAchievements))
        setAchievements(newAchievements)
    }, [])

    // Unlock achievement
    const unlock = useCallback((achievementId: string) => {
        setAchievements(prev => {
            const updated = prev.map(achievement => {
                if (achievement.id === achievementId && !achievement.unlocked) {
                    const unlocked = {
                        ...achievement,
                        unlocked: true,
                        unlockedAt: new Date()
                    }

                    // Show toast
                    setToastAchievement(unlocked)
                    setShowToast(true)
                    setTimeout(() => setShowToast(false), 4000)

                    return unlocked
                }
                return achievement
            })

            saveAchievements(updated)
            return updated
        })
    }, [saveAchievements])

    // Track page visits
    const trackPageVisit = useCallback((page: string) => {
        const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]')
        if (!visitedPages.includes(page)) {
            visitedPages.push(page)
            localStorage.setItem('visitedPages', JSON.stringify(visitedPages))

            // Check if all pages visited
            const requiredPages = ['/', '/projects', '/skills', '/about', '/contact', '/guestbook', '/dashboard']
            if (requiredPages.every(p => visitedPages.includes(p))) {
                unlock('all_pages')
            }
        }
    }, [unlock])

    const unlockedCount = achievements.filter(a => a.unlocked).length
    const totalCount = achievements.length
    const progress = (unlockedCount / totalCount) * 100

    return {
        achievements,
        unlock,
        trackPageVisit,
        unlockedCount,
        totalCount,
        progress,
        showToast,
        toastAchievement
    }
}
