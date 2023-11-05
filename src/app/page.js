import styles from './page.module.css'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

export default function Home() {
  return (
    
    <main>
      <NavBar />
      <HeroSection />
      <Footer />
    </main>
  )
}
