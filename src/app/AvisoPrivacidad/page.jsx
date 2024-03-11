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
          <div>
          <span>Aviso de Privacidad</span>
          <ul>
          <li>1. InterFinanciera es el responsable del tratamiento de sus datos personales.</li>
          <li>2. La finalidad del tratamiento de sus datos personales es el envío de comunicados vía correo electrónico, por lo cual serán almacenados en un sistema de envíos masivos y pueden contener publicidad, noticias y cualquier información relacionada con InterFinanciera.</li>
          <li>3. Si usted desea limitar el uso o divulgación de sus datos personales, podrá hacerlo vía correo electrónico dirigido al Departamento de Datos Personales de InterFinanciera ( datos@InterFinanciera).</li>
          <li>4. Para ejercer sus derechos de acceso, rectificación, cancelación u oposición respecto de sus datos personales, deberá notificarlo vía correo electrónico dirigido al Departamento de Datos Personales de InterFinanciera (datos@InterCréditosde Colombia.com).</li>
          <li>5. Créditos de Libre Inversión Online podrá transferir sus datos personales a terceros nacionales o extranjeros con el propósito que sigue: almacenamiento en un servidor web con la finalidad de prestar el servicio de envío masivo de correos y/o alojamiento web.</li>
          <li>6. InterFinanciera publicará en (InterCréditosde Colombia/aviso-de-privacidad) cualquier cambio al presente Aviso de Privacidad.</li>
          <li>7. InterFinanciera no ha recabado de usted ningún dato personal sensible, pues ninguno de sus datos puede revelar su origen racial o étnico, estado de salud presente o futuro, información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas o preferencia sexual.</li>
    </ul>
    <span>Usted consiente tácitamente el tratamiento de sus datos personales si no manifiesta oposición al presente aviso.</span></div>
       </div>
      </section>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
}
