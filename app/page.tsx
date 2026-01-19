'use client'

import Link from 'next/link'
import ScrollReveal from './components/ScrollReveal'
import TypewriterEffect from './components/TypewriterEffect'
import RepositoryList from './components/RepositoryList'
import AboutSection from './components/AboutSection'

export default function Home() {
    return (
        <>
            <main className="page-container">
                <section className="hero-section fade-in">
                    <h1 className="glitch text-gradient text-7xl md:text-9xl mb-6 font-extrabold tracking-tight" data-text="Krishna Kumar">
                        Krishna Kumar
                    </h1>
                    <div className="text-2xl md:text-4xl text-blood mb-8 font-semibold h-12">
                        I am a <TypewriterEffect
                            text={[
                                "Full Stack Developer",
                                "React & Node.js Expert",
                                "Python Enthusiast",
                                "Problem Solver",
                                "Open Source Contributor",
                                "Void Explorer",
                                "Digital Alchemist",
                                "Systems Architect"
                            ]}
                            speed={80}
                            deleteSpeed={50}
                            waitBeforeDelete={2000}
                            className="text-white"
                        />
                    </div>

                    <p className="hero-description text-muted" style={{
                        maxWidth: '800px',
                        margin: '0 auto 30px',
                        fontSize: '1.2rem',
                        lineHeight: '1.8'
                    }}>
                        Building scalable <span className="text-blood">Web Apps</span>, robust <span className="text-blood">Backend Systems</span>, and meaningful <span className="text-blood">Open Source Contributions</span>.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {['🚀 Full Stack Development', '⚡ React & Next.js', '🛠️ Node.js & Express', '☕ Java & Spring', '🐍 Python & AI'].map((skill) => (
                            <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:border-red-500/50 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="hero-cta flex justify-center gap-4">
                        <Link href="/projects" className="btn btn-primary text-lg">
                            View Projects
                        </Link>
                        <Link href="/contact" className="btn btn-secondary text-lg">
                            Contact Me
                        </Link>
                        <a href="https://drive.google.com/file/d/1f2Cd9hWhg7ggWAK6GRgtiOchNEblXaBU/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-lg" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                            📄 Resume
                        </a>
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

                <ScrollReveal animation="fade-up">
                    <AboutSection />
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
