'use client'

import { useAchievements } from '../hooks/useAchievements'
import SanityMeter from './SanityMeter'
import SoundToggle from './SoundToggle'
import HiddenTerminal from './HiddenTerminal'
import GhostSightings from './GhostSightings'
import AchievementToast from './AchievementToast'

export default function AdvancedFeatures() {
    const { unlock, showToast, toastAchievement } = useAchievements()

    const handleThemeChange = (theme: string) => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }

    return (
        <>
            <SanityMeter />
            <SoundToggle />
            <HiddenTerminal onAchievementUnlock={unlock} onThemeChange={handleThemeChange} />
            <GhostSightings />
            <AchievementToast achievement={toastAchievement} show={showToast} />
        </>
    )
}
