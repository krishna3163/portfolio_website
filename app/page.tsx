import dynamic from 'next/dynamic'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'

// Lazy load below-the-fold components for better performance
const About = dynamic(() => import('./components/About'), {
    loading: () => <div className="min-h-screen" />,
})
const Experiences = dynamic(() => import('./components/Experiences'), {
    loading: () => <div className="min-h-screen" />,
})
const Projects = dynamic(() => import('./components/Projects'), {
    loading: () => <div className="min-h-screen" />,
})
const Skills = dynamic(() => import('./components/Skills'), {
    loading: () => <div className="min-h-screen" />,
})
const Contact = dynamic(() => import('./components/Contact'), {
    loading: () => <div className="min-h-screen" />,
})
const Footer = dynamic(() => import('./components/Footer'))

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main className="relative">
                <Hero />
                <About />
                <Experiences />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </main>
        </>
    )
}
