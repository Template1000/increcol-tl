import Link from 'next/link'
import ItemServices from './ItemServices'
import TitleServices from './TitleServices'

export default function Services () {
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
        <div id='services' className='container mt-4'>
          <TitleServices />
          <ItemServices />
          <div className='row'>
            <div className='col text-center'>
              <Link
                href='/contactenos'
                className='btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5'
                data-cursor-effect-hover='plus'
                data-cursor-effect-hover-color='light'
              >
                <span>Todos los Servicios</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
