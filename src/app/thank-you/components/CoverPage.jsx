import Link from 'next/link'

export default function CoverPage () {
  return (
    <>
      <section
        className='section section-with-shape-divider page-header page-header-modern page-header-lg border-0 my-0 lazyload'
        data-bg-src='img/demos/business-consulting-3/backgrounds/background-5.jpg'
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='container pb-5 my-3'>
          <div className='row mb-4'>
            <div className='col-md-12 align-self-center p-static order-2 text-center'>
              <h1 className='font-weight-bold text-color-dark text-10'>GRACIAS</h1>
            </div>
            <div className='col-md-12 align-self-center order-1'>
              <ul className='breadcrumb d-block text-center'>
                <li>
                  <Link href='/'>Inicio</Link>
                </li>
                <li className='active'>GRACIAS</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className='shape-divider shape-divider-bottom shape-divider-reverse-x'
          style={{ height: 123 }}
        >
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
      </section>

    </>
  )
}
