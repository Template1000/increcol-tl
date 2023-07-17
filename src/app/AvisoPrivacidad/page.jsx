import Script from 'next/script'
import ScriptLoader from '../components/ScriptLoader'
import CoverContact from './components/CoverPrivacidad'

export default function page () {
  return (
    <>

      <CoverContact />
      <section
        className='section section-height-3 bg-light border-0 pt-4 m-0 lazyload'
        data-bg-src='img/demos/business-consulting-3/backgrounds/background-6.jpg'
        style={{ backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
      >
       <div className='container py-4'>
          <div> Hola mundo</div>
       </div>         
      </section>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
}