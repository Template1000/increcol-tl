import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <>
      <footer
        id='footer'
        className='border-top-0 m-0 lazyload'
        data-bg-src='img/demos/business-consulting-3/backgrounds/background-4.jpg'
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='container pt-3'>
          <div className='row justify-content-between align-items-center py-5 mb-3'>
            <div className='col-auto mb-4 mb-lg-0'>
              <h2 className='font-weight-semibold text-color-light text-10 ls-0 mb-0'>
                INTER FINANCIERA
              </h2>
            </div>
            <div className='col-auto'>
              <Link
                href='/contactenos'
                className='btn btn-primary custom-btn-style-1 font-weight-medium btn-px-4 btn-py-2 text-4'
                data-cursor-effect-hover='plus'
                data-cursor-effect-hover-color='light'
              >
                <span className='text-color-light'>Contáctenos</span>
              </Link>
            </div>
          </div>
          <hr className='bg-color-light opacity-1 my-0' />
          <div className='row pt-3 mt-5'>
            <div className='col-lg-3 mb-4 mb-lg-0'>
              <Link
                href='/'
                className='text-decoration-none'
              >
                <Image
                  src='/img/demos/business-consulting-3/logo-footer.png'
                  className='img-fluid mb-4'
                  width={123}
                  height={33}
                  alt=''
                />
              </Link>
              <p className='text-3-5'>
                Descubre el éxito en línea con nuestra empresa de créditos: rapidez, confiabilidad y satisfacción garantizada.
              </p>

            </div>
            <div className='col-lg-3 mb-4 mb-lg-0'>
              <ul className='list list-icons list-icons-lg'>
                <li className='d-flex px-0 mb-1'>
                  <Image
                    width={25}
                    height={25}
                    src='/img/demos/business-consulting-3/icons/phone.svg'
                    alt='Phone Icon'
                    data-icon=''
                    data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}"
                  />
                  <Link
                    href='tel:+573222695802'
                    className='text-color-light font-weight-semibold text-3-4 ms-2'
                  >
                    (322) 269-5802
                  </Link>
                </li>
                <li className='d-flex px-0 mb-1'>
                  <Image
                    width={25}
                    height={25}
                    src='/img/demos/business-consulting-3/icons/phone.svg'
                    alt='Phone Icon'
                    data-icon=''
                    data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}"
                  />
                  <Link
                    href='tel:+573222695807'
                    className='text-color-light font-weight-semibold text-3-4 ms-2'
                  >
                    (322) 269-5807
                  </Link>
                </li>
                <li className='d-flex px-0 my-3'>
                  <Image
                    width={25}
                    height={25}
                    src='/img/demos/business-consulting-3/icons/email.svg'
                    alt='Email Icon'
                    data-icon=''
                    data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}"
                  />
                  <Link
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CORP}`}
                    className='text-color-light font-weight-semibold text-3-4 ms-2'
                  >
                    {process.env.NEXT_PUBLIC_EMAIL_CORP}
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-4 mb-4 mb-lg-0' />
            <div className='col-lg-2'>
              <h4 className='font-weight-bold text-5'>Enlaces útiles</h4>
              <ul className='list list-icons list-icons-sm'>
                <li>
                  <i className='fas fa-angle-right text-color-default' />
                  <Link
                    href='/contactenos'
                    className='link-hover-style-1 ms-1'
                  >
                    Contáctenos
                  </Link>
                </li>
                <li>
                  <i className='fas fa-angle-right text-color-default' />
                  <Link
                    href='#'
                    className='link-hover-style-1 ms-1'
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <i className='fas fa-angle-right text-color-default' />
                  <Link href='#' className='link-hover-style-1 ms-1'>
                    Beneficios
                  </Link>
                </li>
                <li>
                  <i className='fas fa-angle-right text-color-default' />
                  <Link href='#' className='link-hover-style-1 ms-1'>
                    Servicios
                  </Link>
                </li>
                <li>
                  <i className='fas fa-angle-right text-color-default' />
                  <Link href='#' className='link-hover-style-1 ms-1'>
                    Como Funciona
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright container bg-transparent'>
          <div className='row pb-5'>
            <div className='col-lg-12 text-center m-0'>
              <hr className='bg-color-light opacity-1 mt-5 mb-4' />
              <p className='text-3-4'>
                Inter Créditos de Colombia. © 2023. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
