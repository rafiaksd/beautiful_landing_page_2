import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import CastStudies from './components/CastStudies'
import WorkingProcess from './components/WorkingProcess'
import Team  from './components/Team'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <div className='font-primary'>
          <Navbar />
          <Hero />
          <Services />
          <CTA />
          <CastStudies />
          <WorkingProcess />
          <Team />
          <Testimonials />
      </div> 
    </>
  )
}

export default App
