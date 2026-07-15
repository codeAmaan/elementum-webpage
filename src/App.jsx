import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Features from './Sections/Features'
import Services from './Sections/Services'
import Testimonials from './Sections/Testimonials'
import Newsletter from './Sections/Newsletter'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-white text-gray-900 antialiased font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features/>
        <Services />
        <Testimonials />
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App
