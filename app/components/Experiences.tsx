'use client'

import { motion } from 'framer-motion'

interface Experience {
    company: string
    role: string
    duration: string
    description: string
    highlights: string[]
    logo?: string
}

const experiences: Experience[] = [
    {
        company: "Tech Company",
        role: "Full Stack Developer",
        duration: "2023 - Present",
        description: "Leading full-stack development of modern web applications",
        highlights: [
            "🚀 Built scalable web platforms using React, Next.js, and Node.js",
            "🧠 Developed blockchain-based solutions and smart contracts",
            "🌐 Architected RESTful APIs and microservices",
            "☁️ Managed cloud deployment on AWS and Vercel",
            "🏆 Delivered high-performance applications with modern UI/UX"
        ]
    },
    {
        company: "Previous Company",
        role: "Web Developer",
        duration: "2022 - 2023",
        description: "Developed responsive web applications and user interfaces",
        highlights: [
            "💻 Created dynamic UIs with React and TypeScript",
            "🗄️ Integrated databases and backend services",
            "🔌 Built RESTful APIs for seamless data flow",
            "📱 Ensured mobile-responsive design across all platforms",
            "🎨 Collaborated with designers for pixel-perfect implementations"
        ]
    },
    {
        company: "Internship",
        role: "Developer Intern",
        duration: "2021 - 2022",
        description: "Gained hands-on experience in web development",
        highlights: [
            "🎨 Developed interactive web interfaces with HTML, CSS, JavaScript",
            "📱 Implemented responsive design techniques",
            "⚡ Applied web development best practices",
            "🔧 Used version control with Git and GitHub"
        ]
    }
]

export default function Experiences() {
    return (
        <section id="experience" className="py-24 md:py-32 px-6 bg-muted/20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        EXPERIENCES
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A curated chronicle of professional engagements
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-card backdrop-blur-md rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary mb-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg font-semibold text-foreground">
                                            @{exp.company}
                                        </p>
                                    </div>
                                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground mb-6 italic">
                                    {exp.description}
                                </p>

                                {/* Highlights */}
                                <div className="space-y-3">
                                    {exp.highlights.map((highlight, idx) => (
                                        <p key={idx} className="text-foreground leading-relaxed">
                                            {highlight}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
