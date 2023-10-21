import React from 'react'
import HeroSection from '../HeroSection'
import Skills from '../Skills'
import Portfolio from '../Portfolio'
import ContactMe from '../ContactMe'

export default function Home() {
  return (
    <div className='  dark:bg-gray-950 '>
      
      <HeroSection/>
      <Skills/>
      <Portfolio/>
      <ContactMe/>
    </div>
  )
}
