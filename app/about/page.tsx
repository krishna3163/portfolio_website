import ScrollReveal from '../components/ScrollReveal'

export default function About() {
    return (
        <main className="page-container">
            <section className="page-hero fade-in">
                <h1 className="glitch" data-text="About the Architect">About the Architect</h1>
                <p className="hero-subtitle text-muted">
                    A journey through shadows and code
                </p>
            </section>

            <section className="about-content">
                <ScrollReveal animation="fade-up">
                    <div className="liquid-glass card">
                        <h2 className="text-blood">The Origin Story</h2>
                        <p>
                            Born from the depths of the digital abyss, I am a creator of experiences
                            that blur the line between reality and nightmare. My journey began in the
                            shadows of late-night coding sessions, where the only light came from the
                            glow of terminal windows.
                        </p>
                        <p className="text-muted">
                            With each project, I delve deeper into the art of crafting interfaces that
                            haunt, backends that never rest, and experiences that linger long after
                            the screen goes dark.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100}>
                    <div className="skills-preview liquid-glass card">
                        <h2 className="text-blood flicker">Dark Arts &amp; Technologies</h2>
                        <div className="skills-grid">
                            <div className="skill-badge">React.js</div>
                            <div className="skill-badge">Next.js</div>
                            <div className="skill-badge">TypeScript</div>
                            <div className="skill-badge">Node.js</div>
                            <div className="skill-badge">Python</div>
                            <div className="skill-badge">PostgreSQL</div>
                            <div className="skill-badge">MongoDB</div>
                            <div className="skill-badge">Docker</div>
                            <div className="skill-badge">AWS</div>
                            <div className="skill-badge">Supabase</div>
                            <div className="skill-badge">Blockchain</div>
                            <div className="skill-badge">Web3</div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={200}>
                    <div className="philosophy liquid-glass card">
                        <h2 className="text-blood">Philosophy</h2>
                        <blockquote className="horror-quote">
                            &ldquo;In the darkness of code, we find the light of innovation.
                            Every bug is a lesson, every error a teacher, and every
                            successful deployment a victory over chaos.&rdquo;
                        </blockquote>
                        <p className="text-muted">
                            I believe in creating experiences that are not just functional,
                            but memorable. The best interfaces are those that tell a story,
                            evoke emotion, and leave users wanting more.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={300}>
                    <div className="timeline liquid-glass card">
                        <h2 className="text-blood">The Journey</h2>
                        <div className="timeline-item">
                            <div className="timeline-year">2020</div>
                            <div className="timeline-content">
                                <h3>The Awakening</h3>
                                <p className="text-muted">Discovered the dark arts of web development</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2021</div>
                            <div className="timeline-content">
                                <h3>First Blood</h3>
                                <p className="text-muted">Launched first commercial project</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2022</div>
                            <div className="timeline-content">
                                <h3>The Expansion</h3>
                                <p className="text-muted">Mastered full-stack development</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2023</div>
                            <div className="timeline-content">
                                <h3>Into the Void</h3>
                                <p className="text-muted">Specialized in horror-themed UX/UI</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2024</div>
                            <div className="timeline-content">
                                <h3>Blockchain Mastery</h3>
                                <p className="text-muted">Deep dive into Web3 and decentralized apps</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </main>
    )
}
