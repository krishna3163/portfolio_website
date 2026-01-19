import Link from 'next/link'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Shadow Realm CMS",
            category: "Web Application",
            description: "A content management system that thrives in darkness",
            tech: ["Next.js", "Supabase", "TypeScript"],
            icon: "🌑"
        },
        {
            id: 2,
            title: "Phantom API",
            category: "Backend",
            description: "RESTful API that haunts your endpoints",
            tech: ["Node.js", "Express", "MongoDB"],
            icon: "👻"
        },
        {
            id: 3,
            title: "Cryptic Dashboard",
            category: "Data Visualization",
            description: "Analytics that reveal hidden truths",
            tech: ["React", "D3.js", "PostgreSQL"],
            icon: "📊"
        },
        {
            id: 4,
            title: "Void Commerce",
            category: "E-commerce",
            description: "Shopping experience from the abyss",
            tech: ["Next.js", "Stripe", "Prisma"],
            icon: "🛒"
        },
        {
            id: 5,
            title: "Nightmare Chat",
            category: "Real-time App",
            description: "Messaging that never sleeps",
            tech: ["Socket.io", "Redis", "React"],
            icon: "💬"
        },
        {
            id: 6,
            title: "Dark Portfolio",
            category: "Website",
            description: "Personal brand from the shadows",
            tech: ["Next.js", "Framer Motion", "CSS"],
            icon: "🎨"
        }
    ]

    return (
        <main className="page-container">
            <section className="page-hero fade-in">
                <h1 className="glitch">Cursed Creations</h1>
                <p className="hero-subtitle text-muted">
                    Projects forged in the fires of innovation
                </p>
            </section>

            <section className="projects-grid">
                {projects.map((project, index) => (
                    <Link href={`/projects/${project.id}`} key={project.id}>
                        <div
                            className="project-card liquid-glass slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-icon">{project.icon}</div>
                            <div className="project-category text-muted">{project.category}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description text-muted">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <div className="project-arrow">→</div>
                        </div>
                    </Link>
                ))}
            </section>

            <section className="cta-section">
                <div className="liquid-glass card">
                    <h2 className="flicker">More Darkness Awaits</h2>
                    <p className="text-muted">
                        These are just the beginning. Explore deeper to discover 50+ cursed projects.
                    </p>
                    <button className="btn btn-primary">View All Projects</button>
                </div>
            </section>
        </main>
    )
}
