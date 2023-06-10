import Image from 'next/image'
import Link from 'next/link'

export default function HowDoes () {
  return (
    <>
      <div id='howdoes' className='container py-5 my-4'>
        <div className='row justify-content-center pt-3'>
          <div className='col-lg-10 text-center'>
            <h2
              className='custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={250}
            >
              COMO FUNCIONA
            </h2>
            <h3
              className='text-9 line-height-3 text-transform-none font-weight-semibold mb-4 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={500}
            >
              ¡Descubre una nueva forma de alcanzar tus metas financieras!
            </h3>
            <p
              className='text-3-5 pb-3 mb-4 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={750}
            >
              En Inter Créditos de Colombia, garantiza aprobar el 97% de nuestros créditos por la única razón de que nuestro sistema de financiamiento está estipulado con en el método de interés compuesto.<br /><br />

              El cual se caracteriza por aprobar un monto mínimo de $ 2’000.000 millones de pesos (en adelante) a un determinado plazo pactado el cual puede ir de 6 meses hasta 72 meses, con un interés fijo del 2% TAE. Por ende, nuestros clientes se comprometen a realizar el pago de dichas cuotas, reintegrando el capital prestado y adicionalmente un interés por el préstamo. Este interés se aplica al capital base para nuevamente ser prestados a otro cliente, de este modo aplicamos lo que se denomina interés compuesto.
            </p>
          </div>
        </div>
        <div
          className='row row-gutter-sm justify-content-center mb-4 appear-animation'
          data-appear-animation='fadeInUpShorter'
          data-appear-animation-delay={1000}
        >
          <div className='col-sm-9 col-md-6 col-lg-4 mb-4 mb-lg-0'>
            <Link
              href='/'
              className='custom-link-hover-effects text-decoration-none'
              data-cursor-effect-hover='plus'
            >
              <div className='card border-0 box-shadow-4'>
                <div className='card-img-top position-relative overlay'>
                  <div className='position-absolute bottom-10 right-0 d-flex justify-content-end w-100 py-3 px-4 z-index-3'>
                    <span className='custom-date-style-1 text-center bg-primary text-color-light font-weight-semibold text-5-5 line-height-2 px-3 py-2'>
                      <span className='position-relative z-index-2'>
                        1
                        <span className='d-block custom-font-size-1 positive-ls-2 px-1'>
                          PASO
                        </span>
                      </span>
                    </span>
                  </div>
                  <Image
                    width={393}
                    height={205}
                    src='/img/demos/business-consulting-3/blog/blog-1.jpg'
                    className='img-fluid'
                    alt='Lorem Ipsum Dolor'
                  />
                </div>
                <div className='card-body p-4'>
                  <span className='d-block text-color-grey font-weight-semibold positive-ls-2 text-2'>
                    CONTÁCTENOS
                  </span>
                  <h4 className='font-weight-semibold text-5 text-color-hover-primary mb-2'>
                    Puede usar Nuestra Línea WhatsApp, Línea Telefónica o correo electrónico
                  </h4>
                  <span className='custom-view-more d-inline-flex font-weight-medium text-color-primary'>
                    Contactar Ahora
                    <Image
                      width={27}
                      height={27}
                      src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary ms-2'}"
                      style={{ width: 27 }}
                    />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-sm-9 col-md-6 col-lg-4 mb-4 mb-lg-0'>
            <Link
              href='/'
              className='custom-link-hover-effects text-decoration-none'
              data-cursor-effect-hover='plus'
            >
              <div className='card border-0 box-shadow-4'>
                <div className='card-img-top position-relative overlay'>
                  <div className='position-absolute bottom-10 right-0 d-flex justify-content-end w-100 py-3 px-4 z-index-3'>
                    <span className='custom-date-style-1 text-center bg-primary text-color-light font-weight-semibold text-5-5 line-height-2 px-3 py-2'>
                      <span className='position-relative z-index-2'>
                        2
                        <span className='d-block custom-font-size-1 positive-ls-2 px-1'>
                          PASO
                        </span>
                      </span>
                    </span>
                  </div>
                  <Image
                    width={393}
                    height={205}
                    src='/img/demos/business-consulting-3/blog/blog-2.jpg'
                    className='img-fluid'
                    alt='Lorem Ipsum Dolor'
                  />
                </div>
                <div className='card-body p-4'>
                  <span className='d-block text-color-grey font-weight-semibold positive-ls-2 text-2'>
                    ASESOR FINANCIERO
                  </span>
                  <h4 className='font-weight-semibold text-5 text-color-hover-primary mb-2'>
                    Un asesor especializado, evaluara el estado de su petición en pocos minutos.
                  </h4>
                  <span className='custom-view-more d-inline-flex font-weight-medium text-color-primary'>
                    Pedir un Asesor
                    <Image
                      width={27}
                      height={27}
                      src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary ms-2'}"
                      style={{ width: 27 }}
                    />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-sm-9 col-md-6 col-lg-4'>
            <Link
              href='/'
              className='custom-link-hover-effects text-decoration-none'
              data-cursor-effect-hover='plus'
            >
              <div className='card border-0 box-shadow-4'>
                <div className='card-img-top position-relative overlay'>
                  <div className='position-absolute bottom-10 right-0 d-flex justify-content-end w-100 py-3 px-4 z-index-3'>
                    <span className='custom-date-style-1 text-center bg-primary text-color-light font-weight-semibold text-5-5 line-height-2 px-3 py-2'>
                      <span className='position-relative z-index-2'>
                        3
                        <span className='d-block custom-font-size-1 positive-ls-2 px-1'>
                          PASO
                        </span>
                      </span>
                    </span>
                  </div>
                  <Image
                    width={393}
                    height={205}
                    src='/img/demos/business-consulting-3/blog/blog-3.jpg'
                    className='img-fluid'
                    alt='Lorem Ipsum Dolor'
                  />
                </div>
                <div className='card-body p-4'>
                  <span className='d-block text-color-grey font-weight-semibold positive-ls-2 text-2'>
                    DESEMBOLSO
                  </span>
                  <h4 className='font-weight-semibold text-5 text-color-hover-primary mb-2'>
                    Recibirá su aprobación en menos de 2 Horas y será transferido el mismo día.
                  </h4>
                  <span className='custom-view-more d-inline-flex font-weight-medium text-color-primary'>
                    Solicítalo Ya!
                    <Image
                      width={27}
                      height={27}
                      src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary ms-2'}"
                      style={{ width: 27 }}
                    />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
