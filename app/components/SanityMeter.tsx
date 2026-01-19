'use client'

import { useState, useEffect } from 'react'
import { useSanity } from '../hooks/useSanity'
import './SanityMeter.css'

export default function SanityMeter() {
    const { sanity, getSanityLevel } = useSanity()
    const [isVisible, setIsVisible] = useState(false)
    const sanityLevel = getSanityLevel()

    useEffect(() => {
        // Show meter after 2 seconds
        setTimeout(() => setIsVisible(true), 2000)
    }, [])

    if (!isVisible) return null

    return (
        <div className={`sanity-meter ${sanityLevel}`}>
            <div className="sanity-container">
                {/* Creepy Eye */}
                <div className="sanity-eye">
                    <div className="eye-outer">
                        <div
                            className="eye-lid eye-lid-top"
                            style={{ transform: `scaleY(${1 - (sanity / 100)})` }}
                        />
                        <div className="eye-pupil" style={{
                            transform: `scale(${0.5 + (sanity / 200)})`
                        }}>
                            <div className="eye-shine" />
                        </div>
                        <div
                            className="eye-lid eye-lid-bottom"
                            style={{ transform: `scaleY(${1 - (sanity / 100)})` }}
                        />
                    </div>
                </div>

                {/* Sanity Bar */}
                <div className="sanity-bar-container">
                    <div className="sanity-label">SANITY</div>
                    <div className="sanity-bar-bg">
                        <div
                            className="sanity-bar-fill"
                            style={{ width: `${sanity}%` }}
                        />
                        <div className="sanity-bar-glitch" />
                    </div>
                    <div className="sanity-value">{Math.round(sanity)}%</div>
                </div>

                {/* Sanity Message */}
                <div className="sanity-message">
                    {sanityLevel === 'stable' && ''}
                    {sanityLevel === 'uneasy' && 'Something feels... off'}
                    {sanityLevel === 'unstable' && 'Reality is slipping...'}
                    {sanityLevel === 'breaking' && 'THE VOID CALLS...'}
                    {sanityLevel === 'insane' && '̶̛Y̴̕O̶̕U̵̕R̴̛ ̶̕S̴̛O̵̕Ư̴L̵̕ ̶̛I̴̕S̵̕ ̶̛M̴̕I̵̛N̶̕E̴̛'}
                </div>
            </div>
        </div>
    )
}
