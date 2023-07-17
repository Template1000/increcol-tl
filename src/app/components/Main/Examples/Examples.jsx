import Image from 'next/image'

export default function Examples () {
  return (
    <>
      <div className='container'>
        <div className='row align-items-center py-4 my-5 mb-lg-0 my-xl-5'>
          <div className='col-lg-7 mb-5 mb-lg-0'>
            <h2 className='text-9 line-height-3 text-transform-none font-weight-semibold mb-4'>
              Garantía que marca la diferencia en créditos
            </h2>
            <p className='text-3-5 pb-3 mb-4'>
              Con habilidades sobresalientes como eficiencia, claridad y flexibilidad, ofrecemos un servicio financiero de primera categoría. Confía en nosotros para lograr tus objetivos económicos con éxito.{' '}
            </p>
            <div className='progress-bars pb-4'>
              <div className='progress-label d-flex justify-content-between'>
                <span className='text-color-dark font-weight-semibold text-2'>
                  RAPIDEZ EFICIENTE
                </span>
                <span className='text-color-dark font-weight-semibold text-2'>
                  95%
                </span>
              </div>
              <div className='progress progress-xs progress-no-border-radius bg-color-light-scale-1 mb-4'>
                <div
                  className='progress-bar progress-bar-primary'
                  data-appear-progress-animation='95%'
                />
              </div>
              <hr className='my-0' />
              <div className='progress-label d-flex justify-content-between pt-2'>
                <span className='text-color-dark font-weight-semibold text-2'>
                  COMUNICACIÓN CLARA
                </span>
                <span className='text-color-dark font-weight-semibold text-2'>
                  88%
                </span>
              </div>
              <div className='progress progress-xs progress-no-border-radius bg-color-light-scale-1 mb-4'>
                <div
                  className='progress-bar progress-bar-primary'
                  data-appear-progress-animation='85%'
                />
              </div>
              <hr className='my-0' />
              <div className='progress-label d-flex justify-content-between pt-2'>
                <span className='text-color-dark font-weight-semibold text-2'>
                  ADAPTABILIDAD FLEXIBLE
                </span>
                <span className='text-color-dark font-weight-semibold text-2'>
                  50%
                </span>
              </div>
              <div className='progress progress-xs progress-no-border-radius bg-color-light-scale-1 mb-4'>
                <div
                  className='progress-bar progress-bar-primary'
                  data-appear-progress-animation='50%'
                />
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <Image
              width={483}
              height={271}
              src='/img/demos/business-consulting-3/generic/generic-4.jpg'
              className='img-fluid'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}
