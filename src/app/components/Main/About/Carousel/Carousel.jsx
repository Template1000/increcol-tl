import Image from 'next/image'
import Link from 'next/link'

export default function Carousel () {
  return (
    <>
      <div className='row'>
        <div className='col-xl-7 ms-xl-auto'>
          <div
            className='owl-carousel owl-theme custom-carousel-box-shadow-1 custom-dots-style-1 mb-0'
            data-plugin-options="{'responsive': {'576': {'items': 1}, '768': {'items': 2}, '992': {'items': 2}, '1200': {'items': 2}}, 'margin': 20, 'loop': false, 'nav': false, 'autoplay': true, 'autoplayTimeout': 5000, 'dots': true}"
            style={{ height: 398 }}
          >
            <div>
              <Link
                href='/contactenos'
                className='custom-link-hover-effects text-decoration-none'
                data-cursor-effect-hover='plus'
              >
                <div className='card border-0'>
                  <div className='card-body text-center py-5'>
                    <Image
                      width={75}
                      height={75}
                      src='/img/demos/business-consulting-3/icons/a.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                      style={{ width: 75, height: 75 }}
                    />
                    <div className='custom-crooked-line'>
                      <Image
                        width={154}
                        height={26}
                        src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                        alt=''
                        data-icon=''
                        data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                        style={{ width: 154, height: 26 }}
                      />
                    </div>
                    <h2 className='text-5 font-weight-semibold mb-1'>
                      Rápido Efectivo
                    </h2>
                    <p className='pb-1 mb-2'>
                      Obtén dinero al instante con nuestros préstamos rápidos y seguros
                    </p>
                    <span className='custom-view-more d-inline-flex font-weight-medium text-color-primary'>
                      Solicitar Ahora
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
            <div>
              <Link
                href='/contactenos'
                className='custom-link-hover-effects text-decoration-none'
                data-cursor-effect-hover='plus'
              >
                <div className='card border-0'>
                  <div className='card-body text-center py-5'>
                    <Image
                      width={75}
                      height={75}
                      src='/img/demos/business-consulting-3/icons/b.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                      style={{ width: 75, height: 75 }}
                    />
                    <div className='custom-crooked-line'>
                      <Image
                        width={154}
                        height={26}
                        src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                        alt=''
                        data-icon=''
                        data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                        style={{ width: 154, height: 26 }}
                      />
                    </div>
                    <h2 className='text-5 font-weight-semibold mb-1'>
                      Préstamo Flexible
                    </h2>
                    <p className='pb-1 mb-2'>
                      Adapta las condiciones de tu préstamo a tu situación financiera personal
                    </p>
                    <span className='custom-view-more d-inline-flex font-weight-medium text-color-primary'>
                      Solicitar Ahora
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
            <div>
              <Link
                href='/contactenos'
                className='custom-link-hover-effects text-decoration-none'
                data-cursor-effect-hover='plus'
              >
                <div className='card border-0'>
                  <div className='card-body text-center py-5'>
                    <Image
                      width={75}
                      height={75}
                      src='/img/demos/business-consulting-3/icons/c.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                      style={{ width: 75, height: 75 }}
                    />
                    <div className='custom-crooked-line'>
                      <Image
                        width={154}
                        height={26}
                        src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                        alt=''
                        data-icon=''
                        data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                        style={{ width: 154, height: 26 }}
                      />
                    </div>
                    <h2 className='text-5 font-weight-semibold mb-1'>
                      Crédito Fácil
                    </h2>
                    <p className='pb-1 mb-2'>
                      Solicita y disfruta de créditos sin complicaciones ni trámites largos
                    </p>
                    <span className='custom-view-more d-inline-flex font-weight-medium text-color-primary'>
                      Solicitar Ahora
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
            <div>
              <Link
                href='/contactenos'
                className='custom-link-hover-effects text-decoration-none'
                data-cursor-effect-hover='plus'
              >
                <div className='card border-0'>
                  <div className='card-body text-center py-5'>
                    <Image
                      width={75}
                      height={75}
                      src='/img/demos/business-consulting-3/icons/d.svg'
                      alt=''
                      data-icon=''
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                      style={{ width: 75, height: 75 }}
                    />
                    <div className='custom-crooked-line'>
                      <Image
                        width={154}
                        height={26}
                        src='/img/demos/business-consulting-3/icons/infinite-crooked-line.svg'
                        alt=''
                        data-icon=''
                        data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                        style={{ width: 154, height: 26 }}
                      />
                    </div>
                    <h2 className='text-5 font-weight-semibold mb-1'>
                      Dinero Inmediato
                    </h2>
                    <p className='pb-1 mb-2'>
                      Accede a efectivo al instante para cubrir tus necesidades urgentes
                    </p>
                    <span className='custom-view-more d-inline-flex font-weight-medium text-color-primary'>
                      Solicitar Ahora
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
      </div>
    </>
  )
}
