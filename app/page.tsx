'use client'

import Link from 'next/link'
import ScrollReveal from './components/ScrollReveal'
import TypewriterEffect from './components/TypewriterEffect'
import RepositoryList from './components/RepositoryList'

export default function Home() {
    return (
        <>
            <main className="page-container">
                <section className="hero-section fade-in">
                    <h1 className="glitch text-gradient text-7xl md:text-9xl mb-8 font-extrabold tracking-tight" data-text="Hi There! I'm Krishna">
                        <TypewriterEffect text="Hi There! I'm Krishna" speed={80} />
                    </h1>
                    <p className="hero-subtitle">
                        Software Engineer & Open Source Contributor
                    </p>
                    <div className="hero-cta">
                        <Link href="/projects" className="btn btn-primary text-lg">
                            Explore Projects
                        </Link>
                        <Link href="/contact" className="btn btn-secondary text-lg">
                            Contact Me
                        </Link>
                    </div>
                </section>

                <ScrollReveal animation="fade-up">
                    <section className="featured-section">
                        <div className="liquid-glass card">
                            <h2 className="text-blood">Featured Work</h2>
                            <div className="featured-grid">
                                <Link href="/projects" className="featured-item slide-up">
                                    <div className="featured-icon">💀</div>
                                    <h3>Dark Web Apps</h3>
                                    <p className="text-muted">Haunting user experiences that linger in memory</p>
                                </Link>
                                <Link href="/projects" className="featured-item slide-up" style={{ animationDelay: '0.1s' }}>
                                    <div className="featured-icon">🕷️</div>
                                    <h3>Cursed APIs</h3>
                                    <p className="text-muted">Backend systems that never sleep</p>
                                </Link>
                                <Link href="/projects" className="featured-item slide-up" style={{ animationDelay: '0.2s' }}>
                                    <div className="featured-icon">🦇</div>
                                    <h3>Shadow Designs</h3>
                                    <p className="text-muted">Interfaces born from the depths</p>
                                </Link>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal animation="zoom" delay={100}>
                    <section className="stats-section">
                        <div className="stats-grid">
                            <div className="stat-card liquid-glass pulse-glow">
                                <div className="stat-number text-blood">50+</div>
                                <div className="stat-label">Cursed Projects</div>
                            </div>
                            <div className="stat-card liquid-glass pulse-glow" style={{ animationDelay: '0.5s' }}>
                                <div className="stat-number text-blood">666</div>
                                <div className="stat-label">Lines of Dark Code</div>
                            </div>
                            <div className="stat-card liquid-glass pulse-glow" style={{ animationDelay: '1s' }}>
                                <div className="stat-number text-blood">∞</div>
                                <div className="stat-label">Nightmares Created</div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <RepositoryList />
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={200}>
                    <section className="cta-section">
                        <div className="liquid-glass card">
                            <h2 className="flicker">Ready to Enter the Darkness?</h2>
                            <p className="text-muted">
                                Join me in creating experiences that transcend the ordinary
                            </p>
                            <Link href="/about" className="btn btn-primary">
                                Start Your Journey
                            </Link>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100}>
                    <section className="guestbook-preview">
                        <div className="liquid-glass card">
                            <h2 className="text-blood">📖 The Dark Guestbook</h2>
                            <p className="text-muted">
                                Leave your mark in the void. Join others who have visited this realm.
                            </p>
                            <Link href="/guestbook" className="btn btn-secondary">
                                Sign the Guestbook
                            </Link>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </>
    )
}
