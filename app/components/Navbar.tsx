'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg border-b border-border' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-mono hover:scale-105 transition-all duration-300 flex items-center gap-1">
                        <span className="text-foreground">&lt;</span>
                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-bold">
                            Krishna Kumar
                        </span>
                        <span className="text-foreground">/&gt;</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Projects
                        </Link>
                        <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Skills
                        </Link>
                        <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Theme Toggle (placeholder) */}
                    <button className="p-2 rounded-lg hover:bg-accent transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
