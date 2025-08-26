import { useEffect } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Counter from '../../components/Counter'
import Collection from '../../components/Collection'
import Jaqport from '../../components/Jaqport'
import GameSection from '../../components/GameSection'
import VipJackpotModal from '../../components/VipJackpotModal'
import MoneyPopup from '../../components/MoneyPopup'
import { startMoneyRain, showNextPopup } from '../../utils/helpers'
import './Home.css'

function Home() {
  useEffect(() => {
    const timer = setInterval(showNextPopup, 3000)
    startMoneyRain()
    setTimeout(() => document.getElementById('vip-jackpot-modal').style.display = 'block', 900)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-bg min-h-screen relative">
      <audio id="voice1" autoPlay>
        <source src="/assets/audio/ElevenLabs_2025-07-31T05_26_22_Sia – Casual & Comforting Girl Voice for AI Chatbots & Apps_pvc_sp100_s31_sb52_se8_b_m2.mp3" type="audio/mpeg" />
      </audio>
      <audio id="voice2">
        <source src="/assets/audio/login.mp3" type="audio/mpeg" />
      </audio>
      <audio id="voice3">
        <source src="/assets/audio/badhai-ho.mp3" type="audio/mpeg" />
      </audio>
      <Header />
      <Banner />
      <Counter />
      <Collection />
      <Jaqport />
      <GameSection />
      <VipJackpotModal />
      <MoneyPopup />
      <a href="#" className="scrollToTop"><i className="icofont-rounded-up"></i></a>
      <div className="body-shape">
        <img src="/assets/images/shape/body-shape.png" alt="shape" />
      </div>
    </div>
  )
}

export default Home