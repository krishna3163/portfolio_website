export default function Skills() {
    const skillCategories = [
        {
            category: "Frontend Sorcery",
            icon: "🔮",
            skills: [
                { name: "React.js", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "TypeScript", level: 88 },
                { name: "Tailwind CSS", level: 92 },
                { name: "Framer Motion", level: 85 }
            ]
        },
        {
            category: "Backend Necromancy",
            icon: "⚡",
            skills: [
                { name: "Node.js", level: 90 },
                { name: "Python", level: 85 },
                { name: "PostgreSQL", level: 88 },
                { name: "MongoDB", level: 82 },
                { name: "Redis", level: 78 }
            ]
        },
        {
            category: "DevOps Rituals",
            icon: "🌀",
            skills: [
                { name: "Docker", level: 85 },
                { name: "AWS", level: 80 },
                { name: "CI/CD", level: 82 },
                { name: "Nginx", level: 75 },
                { name: "Linux", level: 88 }
            ]
        },
        {
            category: "Dark Design Arts",
            icon: "🎭",
            skills: [
                { name: "UI/UX Design", level: 90 },
                { name: "Figma", level: 88 },
                { name: "Adobe XD", level: 82 },
                { name: "Animation", level: 85 },
                { name: "3D Graphics", level: 70 }
            ]
        }
    ]

    return (
        <main className="page-container">
            <section className="page-hero fade-in">
                <h1 className="glitch">Arsenal of Darkness</h1>
                <p className="hero-subtitle text-muted">
                    Tools and technologies mastered in the void
                </p>
            </section>

            <section className="skills-section">
                {skillCategories.map((category, catIndex) => (
                    <div
                        key={category.category}
                        className="skill-category liquid-glass card slide-up"
                        style={{ animationDelay: `${catIndex * 0.15}s` }}
                    >
                        <div className="category-header">
                            <span className="category-icon">{category.icon}</span>
                            <h2 className="text-blood">{category.category}</h2>
                        </div>

                        <div className="skills-list">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skill.name} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level text-muted">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{
                                                width: `${skill.level}%`,
                                                animationDelay: `${(catIndex * 0.15) + (skillIndex * 0.05)}s`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <section className="certifications liquid-glass card">
                <h2 className="text-blood flicker">Cursed Certifications</h2>
                <div className="cert-grid">
                    <div className="cert-item">
                        <div className="cert-icon">🏆</div>
                        <h3>AWS Certified Developer</h3>
                        <p className="text-muted">Amazon Web Services</p>
                    </div>
                    <div className="cert-item">
                        <div className="cert-icon">🏆</div>
                        <h3>React Advanced Patterns</h3>
                        <p className="text-muted">Frontend Masters</p>
                    </div>
                    <div className="cert-item">
                        <div className="cert-icon">🏆</div>
                        <h3>Full Stack Mastery</h3>
                        <p className="text-muted">The Odin Project</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
