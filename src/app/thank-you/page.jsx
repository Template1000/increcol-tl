import Script from 'next/script'
import ScriptLoader from '../components/ScriptLoader'
import CoverPage from './components/CoverPage'

export default function page () {
  return (
    <>
      <CoverPage />
      <section
        className='section section-height-3 bg-light border-0 pt-4 m-0 lazyload'
        data-bg-src='img/demos/business-consulting-3/backgrounds/background-6.jpg'
        style={{ backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
      >
       <div className='container py-4'>
          <div>
            <span>Gracias por Elegirnos</span>
            <br/>
            <span>Su mensaje ha sido enviado satisfactoriamente, en breve uno de nuestros asesores lo contactará.</span>
          </div>
        </div>
      </section>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
};
