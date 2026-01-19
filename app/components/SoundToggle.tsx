'use client'

import { useSound } from '../hooks/useSound'
import './SoundToggle.css'

export default function SoundToggle() {
    const { isMuted, toggleMute } = useSound()

    return (
        <button
            onClick={toggleMute}
            className="sound-toggle"
            aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
            title={isMuted ? '🔇 Click for the full horror experience' : '🔊 Sounds enabled'}
        >
            <span className="sound-icon">{isMuted ? '🔇' : '🔊'}</span>
            {isMuted && (
                <span className="sound-hint">Unmute for full experience</span>
            )}
        </button>
    )
}
