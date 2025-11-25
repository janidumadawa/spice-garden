import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import LimitedOffers from './components/LimitedOffers'
import SignatureDishes from './components/SignatureDishes'
import OurStory from './components/OurStory'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="w-full bg-[#FFF8E7]">
      <NavBar />

      <HeroSection />

      <LimitedOffers />

      <SignatureDishes />
      
      <OurStory />

      <Footer />
    </div>
  )
}