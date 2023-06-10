import About from '@/app/components/Main/About/About'
import Benefits from '@/app/components/Main/Benefits/Benefits'
import ContactMail from '@/app/components/Main/ContactMail/ContactMail'
import CoverPage from '@/app/components/Main/CoverPage/CoverPage'
import HowDoes from '@/app/components/Main/HowDoes/HowDoes'
import Services from '@/app/components/Main/Services/Services'
import Skills from '@/app/components/Main/Skills/Skills'
import Team from '@/app/components/Main/Team/Team'
import Testimonials from '@/app/components/Main/Testimonials/Testimonials'

export default function Main () {
  return (
    <>
      <div role='main' className='main'>
        <CoverPage />
        <About />
        {/* Brands */}
        <Services />
        <Benefits />
        <Skills />
        <Team />
        <ContactMail />
        <Testimonials />
        <HowDoes />
      </div>
    </>
  )
}
