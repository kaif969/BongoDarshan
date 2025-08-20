// import React from 'react'
import { HeroSection } from '@/components/hero-section'
import { TopDestinations } from '@/components/top-destinations'
import { TopTours } from '@/components/top-tours'

 function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      <HeroSection />
      <TopDestinations />
      <TopTours />
    </div>
  )
}

export default Home