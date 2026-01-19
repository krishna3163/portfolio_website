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
                    <p className="hero-description text-muted" style={{
                        maxWidth: '800px',
                        margin: '20px auto',
                        fontSize: '1.1rem',
                        lineHeight: '1.8'
                    }}>
                        🎓 3rd Year B.Tech CSE Student | 💻 Full Stack Developer | 🚀 Passionate about building scalable web applications
                        <br />
                        Specializing in <span className="text-blood">React</span>, <span className="text-blood">Node.js</span>, <span className="text-blood">Java</span>, and <span className="text-blood">Python</span>
                        <br />
                        🌟 Certified in AWS, Microsoft AI, and Google Prompt Engineering
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

                <ScrollReveal animation="fade-up">
                    <section className="journey-section">
                        <div className="liquid-glass card">
                            <h2 className="text-blood flicker">🚀 Evolution of a Developer</h2>
                            <p className="text-muted" style={{ textAlign: 'center', marginBottom: '40px' }}>
                                My transformation from student to skilled developer
                            </p>

                            <div className="timeline">
                                {/* 2023 */}
                                <div className="timeline-item">
                                    <div className="timeline-marker">📚</div>
                                    <div className="timeline-content liquid-glass">
                                        <h3 className="timeline-year">2023</h3>
                                        <h4 className="timeline-title">12th Pass & College Admission</h4>
                                        <p className="timeline-desc">
                                            Started B.Tech CSE journey at Ambalika Institute of Engineering & Technology
                                        </p>
                                        <div className="timeline-tech">
                                            <span className="tech-tag">1st Year</span>
                                            <span className="tech-tag">C Programming</span>
                                            <span className="tech-tag">Java Basics</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2024 */}
                                <div className="timeline-item">
                                    <div className="timeline-marker">💻</div>
                                    <div className="timeline-content liquid-glass">
                                        <h3 className="timeline-year">2024</h3>
                                        <h4 className="timeline-title">2nd Year - Core Fundamentals</h4>
                                        <p className="timeline-desc">
                                            Deep dive into programming fundamentals and data structures
                                        </p>
                                        <div className="timeline-tech">
                                            <span className="tech-tag">Java</span>
                                            <span className="tech-tag">OOP</span>
                                            <span className="tech-tag">Data Structures</span>
                                            <span className="tech-tag">DSA</span>
                                            <span className="tech-tag">Operating System</span>
                                            <span className="tech-tag">Python</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2025 */}
                                <div className="timeline-item active">
                                    <div className="timeline-marker">🚀</div>
                                    <div className="timeline-content liquid-glass">
                                        <h3 className="timeline-year">2025</h3>
                                        <h4 className="timeline-title">3rd Year - Advanced Skills (Current)</h4>
                                        <p className="timeline-desc">
                                            Mastering full stack development and modern technologies
                                        </p>
                                        <div className="timeline-tech">
                                            <span className="tech-tag">SQL</span>
                                            <span className="tech-tag">Web Development</span>
                                            <span className="tech-tag">DBMS</span>
                                            <span className="tech-tag">DAA</span>
                                            <span className="tech-tag">Data Analytics</span>
                                            <span className="tech-tag">Machine Learning</span>
                                            <span className="tech-tag">React</span>
                                            <span className="tech-tag">Node.js</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2026 */}
                                <div className="timeline-item future">
                                    <div className="timeline-marker">🎯</div>
                                    <div className="timeline-content liquid-glass">
                                        <h3 className="timeline-year">2026</h3>
                                        <h4 className="timeline-title">4th Year - Final Year Projects</h4>
                                        <p className="timeline-desc">
                                            Industry-ready projects and placement preparation
                                        </p>
                                        <div className="timeline-tech">
                                            <span className="tech-tag">Final Year Project</span>
                                            <span className="tech-tag">Advanced Development</span>
                                            <span className="tech-tag">System Design</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2027 */}
                                <div className="timeline-item future">
                                    <div className="timeline-marker">🎓</div>
                                    <div className="timeline-content liquid-glass">
                                        <h3 className="timeline-year">2027</h3>
                                        <h4 className="timeline-title">Graduation & Beyond</h4>
                                        <p className="timeline-desc">
                                            Ready to conquer the tech industry!
                                        </p>
                                        <div className="timeline-tech">
                                            <span className="tech-tag">B.Tech Graduate</span>
                                            <span className="tech-tag">Software Engineer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
