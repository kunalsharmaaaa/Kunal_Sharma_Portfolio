import React from 'react'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import About from '../components/About'
import Skill from '../components/Skill'
import Services from '../components/Services'
import Resume from '../components/Resume'
import Works from '../components/Works'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <div className='wrapper relative min-h-screen w-full bg-grey blurredBg'>
        
        <Header />
        <div className="page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter">
          <div className='sitedata relative z-30 min-h-screen'>

            <HeroBanner />
            <About />
            <Skill />
            <Services />
            <Resume />
            <Works />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
