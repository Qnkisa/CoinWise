import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeMarket from '../components/HomeMarket'
import HomeChooseUs from '../components/HomeChooseUs'
import HomeJoin from '../components/HomeJoin'

export default function Home() {
  return (
    <div className="home">
      <HomeHero />
      <HomeMarket/>
      <HomeChooseUs />
      <HomeJoin />
    </div>
  )
}
