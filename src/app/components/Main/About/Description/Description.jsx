import Image from 'next/image'
import Link from 'next/link'

export default function Description () {
  return (
    <>
      <div id='aboutus' className='row align-items-xl-center pt-4 mt-5'>
        <div className='col-md-10 col-lg-6 mb-5 mb-lg-0'>
          <div className='row row-gutter-sm'>
            <div className='col-6'>
              <Image
                width={290}
                height={488}
                src='/img/demos/business-consulting-3/generic/generic-1.jpg'
                className='img-fluid box-shadow-5'
                alt=''
              />
            </div>
            <div className='col-6'>
              <Image
                width={290}
                height={218}
                src='/img/demos/business-consulting-3/generic/generic-2.jpg'
                className='img-fluid box-shadow-5 mb-4'
                alt=''
              />
              <Image
                width={291}
                height={245}
                src='/img/demos/business-consulting-3/generic/generic-3.jpg'
                className='img-fluid box-shadow-5'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='col-lg-6 ps-lg-4 ps-xl-5'>
          <h2
            className='custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2 appear-animation'
            data-appear-animation='fadeInUpShorter'
          >
            SOBRE NOSOTROS
          </h2>
          <h3
            className='text-9 text-lg-5 text-xl-9 line-height-3 text-transform-none font-weight-semibold mb-4 mb-lg-3 mb-xl-4 appear-animation'
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay={250}
          >
            Creciendo juntos, alcanzando el éxito
          </h3>
          <p
            className='text-3-5 pb-1 mb-4 mb-lg-2 mb-xl-4 appear-animation'
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay={500}
          >
            ¡Descubre una nueva forma de alcanzar tus metas financieras con nuestra destacada financiera de créditos! En Inter Créditos de Colombia, nos enorgullece ofrecer una amplia gama de servicios diseñados para satisfacer las necesidades individuales de nuestros valiosos clientes.{' '}
          </p>
          <div
            className='row align-items-center pb-2 mb-4 mb-lg-1 mb-xl-4 appear-animation'
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay={750}
          >
            <div className='col-5'>
              <div className='d-flex'>
                <Image
                  width={63}
                  height={63}
                  src='/img/demos/business-consulting-3/icons/label.svg'
                  alt=''
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'd-lg-none d-xl-block'}"
                />
                <span className='text-3 font-weight-bold text-color-dark pt-2 ms-2'>
                  <strong className='d-block font-weight-bold text-9 mb-2'>
                    240+
                  </strong>
                  Clientes Satisfechos
                </span>
              </div>
            </div>
            <div className='col-7'>
              <blockquote className='custom-blockquote-style-1 m-0 pt-1 pb-2'>
                <p className='mb-0'>
                  La satisfacción de nuestros clientes es nuestra prioridad número uno.{' '}
                </p>
              </blockquote>
            </div>
          </div>
          <div
            className='appear-animation'
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay={1000}
          >
            <Link
              href='/contactenos'
              className='btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5'
              data-cursor-effect-hover='plus'
              data-cursor-effect-hover-color='light'
            >
              <span>Consulte Hoy</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
