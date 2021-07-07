import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
/*import { Gallery } from './components/gallery'*/
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'




const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  )
}

export default App
