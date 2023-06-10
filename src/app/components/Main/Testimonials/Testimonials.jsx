import Image from 'next/image'

export default function Testimonials () {
  return (
    <>
      <section
        className='section section-height-3 border-0 m-0 lazyload'
        data-bg-src='img/demos/business-consulting-3/backgrounds/background-3.jpg'
      >
        <div className='container py-4'>
          <div className='row'>
            <div className='col text-center'>
              <h2
                className='custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={250}
              >
                TESTIMONIOS
              </h2>
              <h3
                className='text-9 line-height-3 text-transform-none font-weight-semibold text-color-dark pb-3 mb-4 appear-animation'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay={500}
              >
                Lo Que Dicen Nuestros Clientes
              </h3>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div
              className='col-lg-11 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={750}
            >
              <div
                className='owl-carousel owl-theme custom-nav-style-1 nav-style-1 nav-svg-arrows-1 nav-outside custom-dots-style-2 bg-light box-shadow-4 mb-0'
                data-plugin-options="{'responsive': {'0': {'items': 1, 'dots': true}, '768': {'items': 1}, '992': {'items': 1, 'nav': true, 'dots': false}, '1200': {'items': 1, 'nav': true, 'dots': false}}, 'loop': false, 'autoHeight': true}"
              >
                <div className='py-5 px-lg-5'>
                  <div className='testimonial testimonial-style-2 px-4 mx-xl-5 my-3'>
                    <Image
                      width={40}
                      height={40}
                      src='/img/demos/business-consulting-3/icons/left-quote.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                      style={{ width: 40 }}
                    />
                    <blockquote>
                      <p className='text-color-dark text-4 line-height-8 alternative-font-4 mb-0'>
                        Desde que descubrí esta financiera, mi experiencia financiera ha mejorado significativamente. Los créditos en línea son rápidos y confiables, y me han ayudado a cumplir mis metas económicas. El equipo de atención al cliente siempre está dispuesto a resolver mis dudas. ¡Gracias por brindar un servicio excepcional!
                      </p>
                    </blockquote>
                    <div className='testimonial-author'>
                      <p>
                        <strong className='font-weight-bold text-5-5 negative-ls-1'>
                          - Gabriel Silva
                        </strong>
                      </p>
                      <p className='text-color-dark mb-0'>Bogotá</p>
                      <p />
                    </div>
                  </div>
                </div>
                <div className='py-5 px-lg-5'>
                  <div className='testimonial testimonial-style-2 px-4 mx-xl-5 my-3'>
                    <Image
                      width={40}
                      height={40}
                      src='/img/demos/business-consulting-3/icons/left-quote.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                      style={{ width: 40 }}
                    />
                    <blockquote>
                      <p className='text-color-dark text-4 line-height-8 alternative-font-4 mb-0'>
                        Estoy impresionado con la rapidez y facilidad de obtener un préstamo con esta financiera en línea. El proceso fue sencillo y en minutos tuve el dinero en mi cuenta. ¡Excelente servicio y atención al cliente! Definitivamente los recomendaré a mis amigos y familiares.
                      </p>
                    </blockquote>
                    <div className='testimonial-author'>
                      <p>
                        <strong className='font-weight-bold text-5-5 negative-ls-1'>
                          - Alejandro Torres
                        </strong>
                      </p>
                      <p className='text-color-dark mb-0'>Medellín</p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
