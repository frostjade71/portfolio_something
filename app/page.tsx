import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoMarquee from '@/components/LogoMarquee'
import AboutSection from '@/components/AboutSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-site-bg">
            <Header />
            <Hero />
            <LogoMarquee />
            <AboutSection />
            <FeaturedProjects />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}
