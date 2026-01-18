'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
    title: string
    description: string
    image: string
    tags: string[]
    link?: string
}

const projects: Project[] = [
    {
        title: "QuickShop E-Commerce",
        description: "Full-stack e-commerce platform with payment integration",
        image: "/images/projects/quickshop_ecommerce.png",
        tags: ["Next.js", "MongoDB", "Stripe"]
    },
    {
        title: "AI Medical Assistant",
        description: "AI-powered medical diagnosis and consultation system",
        image: "/images/projects/ai_medical_assistant.png",
        tags: ["Python", "TensorFlow", "React"]
    },
    {
        title: "Student Management System",
        description: "Comprehensive system for managing student records",
        image: "/images/projects/student_management.png",
        tags: ["MERN Stack", "Redux"]
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio with animations and dark mode",
        image: "/images/projects/portfolio_website.png",
        tags: ["Next.js", "Tailwind", "Framer Motion"]
    },
    {
        title: "Task Manager Pro",
        description: "Collaborative task management application",
        image: "/images/projects/task_manager_pro.png",
        tags: ["React", "Node.js", "Socket.io"]
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 px-6 bg-muted/20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-foreground/70">
                        A showcase of my recent work and experiments
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-card backdrop-blur-md rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                                {/* Project Image */}
                                <div className="relative h-48 bg-muted overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 text-sm">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
