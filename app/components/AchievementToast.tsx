'use client'

import { Achievement } from '../hooks/useAchievements'
import './AchievementToast.css'

interface AchievementToastProps {
    achievement: Achievement | null
    show: boolean
}

export default function AchievementToast({ achievement, show }: AchievementToastProps) {
    if (!achievement || !show) return null

    return (
        <div className="achievement-toast">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-content">
                <div className="achievement-title">Achievement Unlocked!</div>
                <div className="achievement-name">{achievement.name}</div>
                <div className="achievement-desc">{achievement.description}</div>
            </div>
            <div className="achievement-glow" />
        </div>
    )
}
