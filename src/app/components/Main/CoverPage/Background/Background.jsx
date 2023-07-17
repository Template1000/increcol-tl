import Image from 'next/image'
import Link from 'next/link'

export default function Background () {
  return (
    <>
      <section
        className='section section-height-3 section-with-shape-divider position-relative border-0 m-0'
        data-plugin-parallax=''
        data-plugin-options="{'speed': 1.5, 'parallaxHeight': '120%'}"
        data-image-src='img/demos/business-consulting-3/backgrounds/background-1.jpg'
      >
        <Image
          width={613}
          height={704}
          src='/img/demos/business-consulting-3/backgrounds/background-woman.png'
          className='img-fluid position-absolute top-0 right-0 d-none d-md-block appear-animation'
          data-appear-animation='fadeInUpShorter'
          data-appear-animation-delay={1100}
          alt=''
        />
        <div className='container pb-5 pb-xl-0 mt-md-3 mb-5'>
          <div className='row'>
            <div className='col-md-7 col-lg-12'>
              <div
                className='appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={0}
              >
                <h1
                  className='custom-text-background custom-big-font-size-1 text-14 font-weight-bold float-xl-end clearfix line-height-1 custom-ws-mobile-wrap ws-nowrap pb-2 mb-3 mb-xl-5'
                  style={{
                    backgroundImage:
                'url(img/demos/business-consulting-3/backgrounds/text-background.jpg)'
                  }}
                >
                  CRÉDITOS A TU ALCANCE
                </h1>
              </div>
            </div>
          </div>
          <div className='row pb-5 mb-5'>
            <div className='col-md-7 col-xl-5 pb-5 pb-xl-0 mb-5'>
              <strong
                className='d-block font-weight-semibold text-color-dark text-5-5 line-height-4 mb-3 pb-1 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={500}
              >
                Agilidad y transparencia en cada{' '}
                <span className='custom-highlight-text-1 font-weight-bold'>
                  PRÉSTAMO!
                </span>
              </strong>
              <p
                className='text-3-5 mb-4 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={750}
              >
              ¡Obtén créditos rápidos y seguros! Somos tu aliado confiable en finanzas. Contáctanos hoy mismo. </br>
                <br><span className='font-weight-bold text-color-primary'> De 2’000.000 en adelante. Plazo de 6 a 72 meses. TAE del 2%</span> {' '}
                </p>
              <Link
                href='#aboutus'
                data-hash=''
                data-hash-offset={0}
                data-hash-offset-lg={100}
                className='d-inline-flex align-items-center text-decoration-none appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={1000}
              >
                <Image
                  width={30}
                  height={30}
                  src='/img/demos/business-consulting-3/icons/mouse.svg'
                  alt=''
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary me-2'}"
                />
                Saber más
              </Link>
            </div>
          </div>
        </div>
        <div className='shape-divider shape-divider-bottom' style={{ height: 212 }}>
          <div className='shape-divider-horizontal-animation shape-divider-horizontal-animation-to-left'>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 1920 212'
              preserveAspectRatio='xMinYMin'
            >
              <polygon
                fill='#F3F3F3'
                points='0,75 479,161 1357,28 1701,56 1920,26 1920,213 0,212 '
              />
              <polygon
                fill='#FFFFFF'
                points='0,91 481,177 1358,44 1702,72 1920,42 1920,212 0,212 '
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}
