'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'

export default function LiquidGlassNav() {
    const [theme, setTheme] = useState('horror')
    const [previousTheme, setPreviousTheme] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { user, signOut } = useAuth()

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'horror'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    const handleThemeChange = (newTheme: string) => {
        setPreviousTheme(theme)
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    const handleSignOut = async () => {
        await signOut()
        setMobileMenuOpen(false)
    }

    return (
        <nav className="liquid-nav">
            {/* Mobile Menu Button */}
            <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>

            {/* Theme Switcher */}
            <fieldset className="switcher" data-previous={previousTheme}>
                <legend className="switcher__legend">Choose theme</legend>

                <label className="switcher__option">
                    <input
                        className="switcher__input"
                        type="radio"
                        name="theme"
                        value="light"
                        data-option="1"
                        checked={theme === 'light'}
                        onChange={() => handleThemeChange('light')}
                    />
                    <svg className="switcher__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
                        <path fill="var(--c)" fillRule="evenodd" d="M18 12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clipRule="evenodd" />
                        <path fill="var(--c)" d="M17 6.038a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0v-3ZM24.244 7.742a1 1 0 1 1 1.618 1.176L24.1 11.345a1 1 0 1 1-1.618-1.176l1.763-2.427ZM29.104 13.379a1 1 0 0 1 .618 1.902l-2.854.927a1 1 0 1 1-.618-1.902l2.854-.927ZM29.722 20.795a1 1 0 0 1-.619 1.902l-2.853-.927a1 1 0 1 1 .618-1.902l2.854.927ZM25.862 27.159a1 1 0 0 1-1.618 1.175l-1.763-2.427a1 1 0 1 1 1.618-1.175l1.763 2.427ZM19 30.038a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0v3ZM11.755 28.334a1 1 0 0 1-1.618-1.175l1.764-2.427a1 1 0 1 1 1.618 1.175l-1.764 2.427ZM6.896 22.697a1 1 0 1 1-.618-1.902l2.853-.927a1 1 0 1 1 .618 1.902l-2.853.927ZM6.278 15.28a1 1 0 1 1 .618-1.901l2.853.927a1 1 0 1 1-.618 1.902l-2.853-.927ZM10.137 8.918a1 1 0 0 1 1.618-1.176l1.764 2.427a1 1 0 0 1-1.618 1.176l-1.764-2.427Z" />
                    </svg>
                </label>

                <label className="switcher__option">
                    <input
                        className="switcher__input"
                        type="radio"
                        name="theme"
                        value="dark"
                        data-option="2"
                        checked={theme === 'dark'}
                        onChange={() => handleThemeChange('dark')}
                    />
                    <svg className="switcher__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
                        <path fill="var(--c)" d="M12.5 8.473a10.968 10.968 0 0 1 8.785-.97 7.435 7.435 0 0 0-3.737 4.672l-.09.373A7.454 7.454 0 0 0 28.732 20.4a10.97 10.97 0 0 1-5.232 7.125l-.497.27c-5.014 2.566-11.175.916-14.234-3.813l-.295-.483C5.53 18.403 7.13 11.93 12.017 8.77l.483-.297Zm4.234.616a8.946 8.946 0 0 0-2.805.883l-.429.234A9 9 0 0 0 10.206 22.5l.241.395A9 9 0 0 0 22.5 25.794l.416-.255a8.94 8.94 0 0 0 2.167-1.99 9.433 9.433 0 0 1-2.782-.313c-5.043-1.352-8.036-6.535-6.686-11.578l.147-.491c.242-.745.573-1.44.972-2.078Z" />
                    </svg>
                </label>

                <label className="switcher__option">
                    <input
                        className="switcher__input"
                        type="radio"
                        name="theme"
                        value="horror"
                        data-option="3"
                        checked={theme === 'horror'}
                        onChange={() => handleThemeChange('horror')}
                    />
                    <svg className="switcher__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
                        <path fill="var(--c)" d="M18 4a14 14 0 0 0-14 14c0 3.5 1.3 6.7 3.4 9.2.4.5 1 .8 1.6.8h18c.6 0 1.2-.3 1.6-.8 2.1-2.5 3.4-5.7 3.4-9.2A14 14 0 0 0 18 4zm-6 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-12 8h12c-.5 2-2.5 3.5-6 3.5s-5.5-1.5-6-3.5z" />
                    </svg>
                </label>
            </fieldset>

            {/* Navigation Links */}
            <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                <Link href="/skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
                <Link href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="/guestbook" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Guestbook</Link>
                <Link href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

                {user ? (
                    <>
                        <Link href="/dashboard" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                            👻 Dashboard
                        </Link>
                        <button className="nav-link nav-link-logout" onClick={handleSignOut}>
                            🚪 Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="nav-link nav-link-special" onClick={() => setMobileMenuOpen(false)}>
                            🔐 Login
                        </Link>
                        <Link href="/signup" className="nav-link" style={{
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                            padding: '8px 20px',
                            borderRadius: '8px',
                            fontWeight: '600'
                        }} onClick={() => setMobileMenuOpen(false)}>
                            ✨ Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}
