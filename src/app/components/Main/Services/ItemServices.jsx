import Image from 'next/image'
import Link from 'next/link'

export default function ItemServices () {
  return (
    <>
      <div
        className='row row-gutter-sm justify-content-center mb-5 appear-animation'
        data-appear-animation='fadeInUpShorter'
        data-appear-animation-delay={1000}
      >
        <div className='col-sm-9 col-md-6 col-lg-4 mb-4'>
          <Link
            href='/contactenos'
            className='custom-link-hover-effects text-decoration-none'
            data-cursor-effect-hover='plus'
          >
            <div className='card box-shadow-4'>
              <div className='card-img-top position-relative overlay overlay-show'>
                <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                  <h4 className='font-weight-semibold text-color-light text-6 mb-1'>
                    Préstamos Libres
                  </h4>
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
                  width={393}
                  height={205}
                  src='/img/demos/business-consulting-3/services/services-1.jpg'
                  className='img-fluid'
                  alt='Card Image'
                />
              </div>
              <div className='card-body d-flex align-items-center custom-view-more px-4'>
                <p className='card-text w-100 mb-0'>
                  Préstamos libre inversión para cubrir sus necesidades financieras personales.
                </p>
                <Image
                  width={50}
                  height={50}
                  className='w-auto'
                  src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                  alt=''
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                  style={{ width: 50 }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='col-sm-9 col-md-6 col-lg-4 mb-4'>
          <Link
            href='/contactenos'
            className='custom-link-hover-effects text-decoration-none'
            data-cursor-effect-hover='plus'
          >
            <div className='card box-shadow-4'>
              <div className='card-img-top position-relative overlay overlay-show'>
                <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                  <h4 className='font-weight-semibold text-color-light text-6 mb-1'>
                    Líneas De Crédito
                  </h4>
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
                  width={393}
                  height={205}
                  src='/img/demos/business-consulting-3/services/services-2.jpg'
                  className='img-fluid'
                  alt='Card Image'
                />
              </div>
              <div className='card-body d-flex align-items-center custom-view-more px-4'>
                <p className='card-text w-100 mb-0'>
                  Crédito preaprobado, dispone de fondos y paga solo por el monto utilizado.
                </p>
                <Image
                  width={50}
                  height={50}
                  className='w-auto'
                  src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                  alt=''
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                  style={{ width: 50 }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='col-sm-9 col-md-6 col-lg-4 mb-4'>
          <Link
            href='/contactenos'
            className='custom-link-hover-effects text-decoration-none'
            data-cursor-effect-hover='plus'
          >
            <div className='card box-shadow-4'>
              <div className='card-img-top position-relative overlay overlay-show'>
                <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                  <h4 className='font-weight-semibold text-color-light text-6 mb-1'>
                    Crédito Hipotecario
                  </h4>
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
                  width={393}
                  height={205}
                  src='/img/demos/business-consulting-3/services/services-3.jpg'
                  className='img-fluid'
                  alt='Card Image'
                />
              </div>
              <div className='card-body d-flex align-items-center custom-view-more px-4'>
                <p className='card-text w-100 mb-0'>
                  Financiamiento para la compra de viviendas o propiedades.
                </p>
                <Image
                  width={50}
                  height={50}
                  className='w-auto'
                  src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                  alt=''
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                  style={{ width: 50 }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='col-sm-9 col-md-6 col-lg-4 mb-4 mb-lg-0'>
          <Link
            href='/contactenos'
            className='custom-link-hover-effects text-decoration-none'
            data-cursor-effect-hover='plus'
          >
            <div className='card box-shadow-4'>
              <div className='card-img-top position-relative overlay overlay-show'>
                <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                  <h4 className='font-weight-semibold text-color-light text-6 mb-1'>
                    Cuenta De Ahorro
                  </h4>
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
                  width={393}
                  height={205}
                  src='/img/demos/business-consulting-3/services/services-4.jpg'
                  className='img-fluid'
                  alt='Card Image'
                />
              </div>
              <div className='card-body d-flex align-items-center custom-view-more px-4'>
                <p className='card-text w-100 mb-0'>
                  Ahorre dinero y obtenga rendimientos a través de tasas de interés.
                </p>
                <Image
                  width={50}
                  height={50}
                  className='w-auto'
                  src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                  alt=''
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                  style={{ width: 50 }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='col-sm-9 col-md-6 col-lg-4 mb-4 mb-lg-0'>
          <Link
            href='/contactenos'
            className='custom-link-hover-effects text-decoration-none'
            data-cursor-effect-hover='plus'
          >
            <div className='card box-shadow-4'>
              <div className='card-img-top position-relative overlay overlay-show'>
                <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                  <h4 className='font-weight-semibold text-color-light text-6 mb-1'>
                    Tarjetas De Crédito
                  </h4>
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
                  width={393}
                  height={205}
                  src='/img/demos/business-consulting-3/services/services-5.jpg'
                  className='img-fluid'
                  alt='Card Image'
                />
              </div>
              <div className='card-body d-flex align-items-center custom-view-more px-4'>
                <p className='card-text w-100 mb-0'>
                  Realice compras y páguelas posteriormente a plazos con beneficios adicionales.
                </p>
                <Image
                  width={50}
                  height={50}
                  className='w-auto'
                  src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                  alt=''
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                  style={{ width: 50 }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='col-sm-9 col-md-6 col-lg-4'>
          <Link
            href='/contactenos'
            className='custom-link-hover-effects text-decoration-none'
            data-cursor-effect-hover='plus'
          >
            <div className='card box-shadow-4'>
              <div className='card-img-top position-relative overlay overlay-show'>
                <div className='position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3'>
                  <h4 className='font-weight-semibold text-color-light text-6 mb-1'>
                    Inversiones Y Asesoramiento
                  </h4>
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
                  width={393}
                  height={205}
                  src='/img/demos/business-consulting-3/services/services-6.jpg'
                  className='img-fluid'
                  alt='Card Image'
                />
              </div>
              <div className='card-body d-flex align-items-center custom-view-more px-4'>
                <p className='card-text w-100 mb-0'>
                  Asesoramiento financiero sobre cómo hacer crecer su patrimonio.
                </p>
                <Image
                  width={50}
                  height={50}
                  className='w-auto'
                  src='/img/demos/business-consulting-3/icons/arrow-right.svg'
                  alt=''
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                  style={{ width: 50 }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
