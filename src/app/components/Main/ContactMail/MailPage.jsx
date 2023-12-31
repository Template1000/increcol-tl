import FormContact from './FormContact'

export default function MailPage () {
  return (
    <>
      <div
        className='position-absolute top-0 right-0 overlay overlay-show overlay-color-primary overlay-op-9 h-100 lazyload d-none d-md-block'
        data-bg-src='img/demos/business-consulting-3/backgrounds/background-2.jpg'
        style={{
          width: '32%',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className='container'>
        <div className='row align-items-center pt-5 pb-xl-5 mt-5'>
          <div className='col-md-7 col-lg-8 py-4 my-2 ms-md-3 ms-lg-0'>
            <h2
              className='custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={250}
            >
              PONTE EN CONTACTO
            </h2>
            <h3
              className='text-9 line-height-3 text-transform-none font-weight-medium text-color-light ls-0 mb-3 pb-1 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={500}
            >
              Envíanos un mensaje y conoce más sobre nuestros servicios
            </h3>
            <p
              className='text-3-5 pb-3 mb-4 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={750}
            >
              ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus metas económicas!{' '}
            </p>
            <FormContact />
          </div>
        </div>
      </div>
    </>
  )
}
