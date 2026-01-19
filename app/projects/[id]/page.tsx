import Link from 'next/link'
import { notFound } from 'next/navigation'

// Project data
const projects = [
    {
        id: "1",
        title: "Shadow Realm CMS",
        category: "Web Application",
        description: "A content management system that thrives in darkness. Built with the latest technologies, this CMS allows you to manage your content from the shadows. Features include real-time collaboration, dark mode by default, and a hauntingly beautiful interface.",
        fullDescription: `The Shadow Realm CMS is a next-generation content management system designed for developers who prefer working in the dark. 

Key Features:
• Real-time collaborative editing with presence indicators
• Built-in dark mode with customizable horror themes
• Headless architecture for maximum flexibility
• GraphQL and REST API support
• Role-based access control with soul-binding authentication
• Media management with automatic optimization
• Scheduled publishing from the netherworld
• Multi-language support for global haunting`,
        tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "GraphQL"],
        icon: "🌑",
        github: "https://github.com/krishna3163/shadow-cms",
        live: "https://shadow-cms.vercel.app",
        images: ["/projects/shadow-cms-1.png", "/projects/shadow-cms-2.png"]
    },
    {
        id: "2",
        title: "Phantom API",
        category: "Backend",
        description: "RESTful API that haunts your endpoints. A high-performance, scalable API framework designed for building robust backend services that never rest.",
        fullDescription: `Phantom API is an enterprise-grade REST API framework that operates silently but effectively.

Key Features:
• Lightning-fast response times with intelligent caching
• Built-in rate limiting to prevent abuse
• Comprehensive logging and monitoring
• Auto-generated documentation
• JWT authentication with refresh token rotation
• Webhook support for event-driven architectures
• Database agnostic with support for SQL and NoSQL`,
        tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
        icon: "👻",
        github: "https://github.com/krishna3163/phantom-api",
        live: null,
        images: []
    },
    {
        id: "3",
        title: "Cryptic Dashboard",
        category: "Data Visualization",
        description: "Analytics that reveal hidden truths. A comprehensive dashboard for visualizing complex data patterns and extracting meaningful insights.",
        fullDescription: `Cryptic Dashboard unlocks the secrets hidden within your data.

Key Features:
• Interactive charts and graphs with dark aesthetics
• Real-time data streaming and updates
• Custom widget builder for personalized views
• Export capabilities (PDF, CSV, PNG)
• Collaborative annotations and sharing
• AI-powered anomaly detection
• Mobile-responsive design for analysis on the go`,
        tech: ["React", "D3.js", "PostgreSQL", "Socket.io", "Chart.js"],
        icon: "📊",
        github: "https://github.com/krishna3163/cryptic-dashboard",
        live: "https://cryptic-dashboard.vercel.app",
        images: []
    },
    {
        id: "4",
        title: "Void Commerce",
        category: "E-commerce",
        description: "Shopping experience from the abyss. A full-featured e-commerce platform with a dark twist.",
        fullDescription: `Void Commerce brings shopping to the darkness with style.

Key Features:
• Dark-themed product showcase
• Secure payment processing with Stripe
• Inventory management system
• Order tracking and notifications
• Customer reviews and ratings
• Wishlist and cart persistence
• Multi-currency support
• Admin dashboard for store management`,
        tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
        icon: "🛒",
        github: "https://github.com/krishna3163/void-commerce",
        live: null,
        images: []
    },
    {
        id: "5",
        title: "Nightmare Chat",
        category: "Real-time App",
        description: "Messaging that never sleeps. A real-time chat application with end-to-end encryption.",
        fullDescription: `Nightmare Chat keeps your conversations secure in the shadows.

Key Features:
• End-to-end encryption for private messages
• Real-time message delivery with read receipts
• Group chats with admin controls
• File and media sharing
• Voice and video calls
• Message reactions and threading
• Custom themes including horror modes
• Cross-platform support`,
        tech: ["Socket.io", "Redis", "React", "Node.js", "WebRTC"],
        icon: "💬",
        github: "https://github.com/krishna3163/nightmare-chat",
        live: "https://nightmare-chat.vercel.app",
        images: []
    },
    {
        id: "6",
        title: "Dark Portfolio",
        category: "Website",
        description: "Personal brand from the shadows. This very portfolio you're viewing now.",
        fullDescription: `Dark Portfolio is a horror-themed developer portfolio built to showcase projects and skills.

Key Features:
• Immersive horror-themed design
• Animated ghost character companion
• Floating particle effects
• User authentication and guestbook
• Responsive across all devices
• Smooth scroll animations
• Dark/Light/Horror theme modes
• Contact form with database storage`,
        tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Supabase", "TypeScript"],
        icon: "🎨",
        github: "https://github.com/krishna3163/portfolio",
        live: "https://krishnakumar.dev",
        images: []
    }
]

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const project = projects.find(p => p.id === id)

    if (!project) {
        notFound()
    }

    return (
        <main className="page-container">
            <section className="project-detail-hero fade-in">
                <Link href="/projects" className="back-link">
                    ← Back to Projects
                </Link>
                <div className="project-icon-large">{project.icon}</div>
                <span className="project-category-badge">{project.category}</span>
                <h1 className="glitch" data-text={project.title}>{project.title}</h1>
                <p className="hero-subtitle text-muted">{project.description}</p>
            </section>

            <section className="project-content">
                <div className="project-main liquid-glass card">
                    <h2 className="text-blood">About This Project</h2>
                    <div className="project-full-description">
                        {project.fullDescription.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>

                <div className="project-sidebar">
                    <div className="liquid-glass card">
                        <h3 className="text-blood">Tech Stack</h3>
                        <div className="tech-stack-list">
                            {project.tech.map(tech => (
                                <span key={tech} className="tech-badge-large">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="liquid-glass card">
                        <h3 className="text-blood">Links</h3>
                        <div className="project-links">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link-btn"
                                >
                                    <span>💻</span> View Source
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link-btn primary"
                                >
                                    <span>🌐</span> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="more-projects">
                <div className="liquid-glass card">
                    <h2 className="flicker">Explore More Darkness</h2>
                    <p className="text-muted">Continue your journey through my cursed creations.</p>
                    <Link href="/projects">
                        <button className="btn btn-primary">View All Projects</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
