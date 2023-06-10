import Image from 'next/image'
import Link from 'next/link'

export default function Team () {
  return (
    <>
      <section className='section section-height-4 section-with-shape-divider bg-color-grey-scale-1 border-0 pb-5 m-0'>
        <div className='shape-divider' style={{ height: 123 }}>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 1920 123'
            preserveAspectRatio='xMinYMin'
          >
            <polygon
              fill='#F3F3F3'
              points='0,90 221,60 563,88 931,35 1408,93 1920,41 1920,-1 0,-1 '
            />
            <polygon
              fill='#FFFFFF'
              points='0,75 219,44 563,72 930,19 1408,77 1920,25 1920,-1 0,-1 '
            />
          </svg>
        </div>
        <div className='container mt-4'>
          <div className='row justify-content-center'>
            <div className='col-lg-11 col-xl-10 text-center'>
              <h2
                className='custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={250}
              >
                PERSONAL CALIFICADO
              </h2>
              <h3
                className='text-9 line-height-3 text-transform-none font-weight-semibold mb-4 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={500}
              >
                Nuestro increíble equipo
              </h3>
              <p
                className='text-3-5 pb-3 mb-4 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={750}
              >
                Nuestro experimentado equipo de profesionales se dedica a evaluar cada solicitud de manera minuciosa y justa, teniendo en cuenta tu historial crediticio, capacidad de pago y necesidades específicas.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div
              className='col appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={1000}
            >
              <div
                className='owl-carousel owl-theme custom-dots-style-1 mb-0'
                data-plugin-options="{'responsive': {'576': {'items': 1}, '768': {'items': 3}, '992': {'items': 3}, '1200': {'items': 5}}, 'margin': 20, 'loop': false, 'nav': false, 'dots': true}"
                style={{ height: 512 }}
              >
                <div>
                  <Link
                    href='/'
                    className='custom-link-hover-effects text-decoration-none'
                    data-cursor-effect-hover='plus'
                  >
                    <div className='card border-0'>
                      <div className='card-img-top position-relative overlay'>
                        <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                          <div className='custom-crooked-line'>
                            <Image
                              width={154}
                              height={26}
                              src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                              alt=''
                              data-icon=''
                              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                              style={{ width: 154 }}
                            />
                          </div>
                        </div>
                        <Image
                          width={352}
                          height={333}
                          src='/img/demos/business-consulting-3/team/team-1.jpg'
                          className='img-fluid'
                          alt='Ricardo Morales'
                        />
                      </div>
                      <div className='card-body'>
                        <h4 className='text-color-hover-primary text-6 mb-0'>
                          Ricardo Morales
                        </h4>
                        <p className='text-3-5 mb-0'>CEO (Director Ejecutivo)</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href='/'
                    className='custom-link-hover-effects text-decoration-none'
                    data-cursor-effect-hover='plus'
                  >
                    <div className='card border-0'>
                      <div className='card-img-top position-relative overlay'>
                        <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                          <div className='custom-crooked-line'>
                            <Image
                              width={154}
                              height={26}
                              src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                              alt=''
                              data-icon=''
                              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                              style={{ width: 154 }}
                            />
                          </div>
                        </div>
                        <Image
                          width={352}
                          height={333}
                          src='/img/demos/business-consulting-3/team/team-2.jpg'
                          className='img-fluid'
                          alt='Laura Gómez'
                        />
                      </div>
                      <div className='card-body'>
                        <h4 className='text-color-hover-primary text-6 mb-0'>
                          Laura Gómez
                        </h4>
                        <p className='text-3-5 mb-0'>CFO (Director Financiero)</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href='/'
                    className='custom-link-hover-effects text-decoration-none'
                    data-cursor-effect-hover='plus'
                  >
                    <div className='card border-0'>
                      <div className='card-img-top position-relative overlay'>
                        <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                          <div className='custom-crooked-line'>
                            <Image
                              width={154}
                              height={26}
                              src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                              alt=''
                              data-icon=''
                              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                              style={{ width: 154 }}
                            />
                          </div>
                        </div>
                        <Image
                          width={352}
                          height={333}
                          src='/img/demos/business-consulting-3/team/team-3.jpg'
                          className='img-fluid'
                          alt='Carlos Vargas'
                        />
                      </div>
                      <div className='card-body'>
                        <h4 className='text-color-hover-primary text-6 mb-0'>
                          Carlos Vargas
                        </h4>
                        <p className='text-3-5 mb-0'>COO(Director Operaciones)</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href='/'
                    className='custom-link-hover-effects text-decoration-none'
                    data-cursor-effect-hover='plus'
                  >
                    <div className='card border-0'>
                      <div className='card-img-top position-relative overlay'>
                        <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                          <div className='custom-crooked-line'>
                            <Image
                              width={154}
                              height={26}
                              src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                              alt=''
                              data-icon=''
                              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                              style={{ width: 154 }}
                            />
                          </div>
                        </div>
                        <Image
                          width={352}
                          height={333}
                          src='/img/demos/business-consulting-3/team/team-4.jpg'
                          className='img-fluid'
                          alt='Ana Torres'
                        />
                      </div>
                      <div className='card-body'>
                        <h4 className='text-color-hover-primary text-6 mb-0'>
                          Ana Torres
                        </h4>
                        <p className='text-3-5 mb-0'>Gerente de Préstamos</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href='/'
                    className='custom-link-hover-effects text-decoration-none'
                    data-cursor-effect-hover='plus'
                  >
                    <div className='card border-0'>
                      <div className='card-img-top position-relative overlay'>
                        <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                          <div className='custom-crooked-line'>
                            <Image
                              width={154}
                              height={26}
                              src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                              alt=''
                              data-icon=''
                              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                              style={{ width: 154 }}
                            />
                          </div>
                        </div>
                        <Image
                          width={352}
                          height={333}
                          src='/img/demos/business-consulting-3/team/team-5.jpg'
                          className='img-fluid'
                          alt='Javier Rodríguez'
                        />
                      </div>
                      <div className='card-body'>
                        <h4 className='text-color-hover-primary text-6 mb-0'>
                          Javier Rodríguez
                        </h4>
                        <p className='text-3-5 mb-0'>Analista de Crédito</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href='/'
                    className='custom-link-hover-effects text-decoration-none'
                    data-cursor-effect-hover='plus'
                  >
                    <div className='card border-0'>
                      <div className='card-img-top position-relative overlay'>
                        <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                          <div className='custom-crooked-line'>
                            <Image
                              width={154}
                              height={26}
                              src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                              alt=''
                              data-icon=''
                              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                              style={{ width: 154 }}
                            />
                          </div>
                        </div>
                        <Image
                          width={352}
                          height={333}
                          src='/img/demos/business-consulting-3/team/team-6.jpg'
                          className='img-fluid'
                          alt='Natalia Fernández'
                        />
                      </div>
                      <div className='card-body'>
                        <h4 className='text-color-hover-primary text-6 mb-0'>
                          Natalia Fernández
                        </h4>
                        <p className='text-3-5 mb-0'>Ejecutivo de Ventas</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
