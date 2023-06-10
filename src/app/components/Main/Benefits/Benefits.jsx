export default function Benefits () {
  return (
    <>
      <section id='benefits' className='section section-height-4 section-with-shape-divider position-relative bg-dark border-0 m-0'>
        <div
          className='shape-divider shape-divider-reverse-x z-index-3'
          style={{ height: 102 }}
        >
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 1920 102'
            preserveAspectRatio='xMinYMin'
          >
            <polygon
              fill='#F3F3F3'
              points='0,65 220,35 562,63 931,10 1410,68 1920,16 1920,103 0,103 '
            />
            <polygon
              fill='#EDEDED'
              points='0,82 219,51 562,78 931,26 1409,83 1920,32 1920,103 0,103 '
            />
          </svg>
        </div>
        <div
          className='position-absolute top-0 left-0 h-100 d-none d-lg-block overlay overlay-show overlay-color-primary'
          data-plugin-parallax=''
          data-plugin-options="{'speed': 1.5}"
          data-image-src='img/demos/business-consulting-3/parallax/parallax-1.jpg'
          style={{ width: '40%' }}
        />
        <div className='container position-relative z-index-3 pt-5 mt-5'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h2
                className='custom-text-background custom-big-font-size-1 text-15 font-weight-bold float-end clearfix line-height-1 lazyload pe-xl-5 me-3 mb-0 d-none d-lg-block'
                data-bg-src='img/demos/business-consulting-3/backgrounds/text-background-2.jpg'
                data-plugin-float-element=''
                data-plugin-options="{'startPos': 'top', 'speed': 0.6, 'transition': true, 'horizontal': true, 'transitionDuration': 1000, 'isInsideSVG': true}"
              >
                BENEFICIOS
              </h2>
            </div>
            <div className='col-lg-6'>
              <h2
                className='custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={250}
              >
                PORQUE ELEGIRNOS
              </h2>
              <h3
                className='text-9 line-height-3 text-transform-none font-weight-medium text-color-light ls-0 mb-3 pb-1 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={500}
              >
                Conoce Aquí Las Principales Razones Por Las Que Deberías Elegirnos
              </h3>
              <p
                className='text-3-5 pb-2 mb-4 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={750}
              >
                La calidad de nuestros servicios se basa en la flexibilidad que ofrecemos a nuestros clientes. {' '}
              </p>
              <ul className='list ps-0 pe-lg-5 mb-0'>
                <li
                  className='d-flex align-items-start pb-1 mb-3 appear-animation'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay={1000}
                >
                  <i className='fas fa-check text-color-light text-4 custom-bg-color-grey-1 rounded-circle p-3' />
                  <span className='text-3-5 ps-3'>
                    Obtén créditos en minutos con seguridad y confianza.
                  </span>
                </li>
                <li
                  className='d-flex align-items-start pb-1 mb-3 appear-animation'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay={1250}
                >
                  <i className='fas fa-check text-color-light text-4 custom-bg-color-grey-1 rounded-circle p-3' />
                  <span className='text-3-5 ps-3'>
                    Administra tus préstamos fácilmente, en línea las 24/7.
                  </span>
                </li>
                <li
                  className='d-flex align-items-start appear-animation'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay={1500}
                >
                  <i className='fas fa-check text-color-light text-4 custom-bg-color-grey-1 rounded-circle p-3' />
                  <span className='text-3-5 ps-3'>
                    Plazos flexibles y asesoramiento personalizado para tu tranquilidad.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
