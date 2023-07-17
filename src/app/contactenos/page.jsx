import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import ScriptLoader from '../components/ScriptLoader'
import CoverContact from './components/CoverContact'

export default function page () {
  return (
    <>

      <CoverContact />
      <section
        className='section section-height-3 bg-light border-0 pt-4 m-0 lazyload'
        data-bg-src='img/demos/business-consulting-3/backgrounds/background-6.jpg'
        style={{ backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
      >
        <div className='container py-4'>
          <div
            className='row box-shadow-4 mx-3 mx-xl-0 appear-animation'
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay={300}
          >
            <div className='col-lg-6 px-0'>
              <div className='bg-light h-100'>
                <div
                  className='d-flex flex-column justify-content-center p-5 h-100 appear-animation'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay={500}
                >
                  <div className='pb-5 mb-4 mt-5 mt-lg-0'>
                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center pe-lg-4'>
                      <Image
                        width={105}
                        height={105}
                        src='img/demos/business-consulting-3/icons/map-pin.svg'
                        alt='Location'
                        data-icon=''
                        data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary mb-4 mb-md-0'}"
                        style={{ width: 105 }}
                      />
                      <div className='text-center text-md-start ps-md-3'>
                        <h2 className='font-weight-semibold text-6 mb-1'>
                          InterCréditos de Colombia
                        </h2>
                        <p className='text-3-5 mb-0 text-center'>
                          Qr WhatsApp Línea de atención
                        </p>
                        <Image
                          width={150}
                          height={150}
                          src='/img/demos/business-consulting-3/qrwa.png'
                          alt='qr'
                          className='mx-auto d-block'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row justify-content-center mb-5 mb-lg-0'>
                    <div className='col-auto text-center ms-xl-auto mb-4 mb-xl-0'>
                      <h3 className='font-weight-semibold text-color-primary text-3-5 mb-0'>
                        SOPORTE
                      </h3>
                      <div className='d-flex'>
                        <Image
                          width={25}
                          height={25}
                          src='img/demos/business-consulting-3/icons/phone.svg'
                          alt='Phone Icon'
                          data-icon=''
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                        />
                        <Link
                          href='tel:+573229338850'
                          className='text-color-dark text-color-hover-primary font-weight-semibold text-decoration-none text-6 ms-2'
                        >
                          322-933-8850
                        </Link>
                      </div>
                    </div>
                    <div className='col-auto text-center me-xl-auto'>
                      <h3 className='font-weight-semibold text-color-primary text-3-5 mb-0'>
                        SALES
                      </h3>
                      <div className='d-flex'>
                        <Image
                          width={25}
                          height={25}
                          src='img/demos/business-consulting-3/icons/phone.svg'
                          alt='Phone Icon'
                          data-icon=''
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                        />
                        <Link
                          href='tel:+573229338850'
                          className='text-color-dark text-color-hover-primary font-weight-semibold text-decoration-none text-6 ms-2'
                        >
                          322-933-8850
                        </Link>
                      </div>
                    </div>
                    <div className='col-auto text-center pt-4 mt-5'>
                      <h3 className='font-weight-semibold text-color-primary text-3-5 mb-0'>
                        ESCRÍBENOS
                      </h3>
                      <div className='d-flex'>
                        <Image
                          width={25}
                          height={25}
                          src='img/demos/business-consulting-3/icons/email.svg'
                          alt='Email Icon'
                          data-icon=''
                          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                        />
                        <Link
                          href='mailto:info@intercreditosdecolombia.com'
                          className='text-color-dark text-color-hover-primary text-decoration-underline font-weight-semibold text-5-5 wb-all ms-2'
                        >
                          info@intercreditosdecolombia.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 px-0'>
              <div className='bg-dark h-100'>
                <div
                  className='text-center text-md-start p-5 h-100 appear-animation'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay={750}
                >
                  <h2 className='text-color-light font-weight-medium mb-4 mt-5 mt-lg-0'>
                    Envíenos un mensaje e infórmese sobre nuestros servicios
                  </h2>
                  <p className='text-3-5 font-weight-medium mb-4'>
                    ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus metas económicas!
                  </p>
                  <form
                    className='contact-form form-style-4 form-placeholders-light form-errors-light mb-5 mb-lg-0'
                    action='php/contact-form.php'
                    method='POST'
                  >
                    <div className='contact-form-success alert alert-success d-none mt-4'>
                      <strong>Success!</strong> Your message has been sent to us.
                    </div>
                    <div className='contact-form-error alert alert-danger d-none mt-4'>
                      <strong>Error!</strong> There was an error sending your message.
                      <span className='mail-error-message text-1 d-block' />
                    </div>
                    <div className='row'>
                      <div className='form-group col'>
                        <input
                          type='text'
                          defaultValue=''
                          data-msg-required='Por favor, escriba su nombre.'
                          maxLength={100}
                          className='form-control text-3 custom-border-color-grey-1 h-auto py-2'
                          name='name'
                          placeholder='* Nombre Completo'
                          required=''
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='form-group col'>
                        <input
                          type='email'
                          defaultValue=''
                          data-msg-required='Por favor, introduzca su dirección de correo electrónico.'
                          data-msg-email='Por favor, introduce una dirección de correo electrónico válida.'
                          maxLength={100}
                          className='form-control text-3 custom-border-color-grey-1 h-auto py-2'
                          name='email'
                          placeholder='* Correo electrónico'
                          required=''
                        />
                      </div>
                    </div>
                    <div className='row mb-4'>
                      <div className='form-group col'>
                        <textarea
                          maxLength={5000}
                          data-msg-required='Por favor ingrese su mensaje.'
                          rows={8}
                          className='form-control text-3 custom-border-color-grey-1 h-auto py-2'
                          name='message'
                          placeholder='* Mensaje'
                          required=''
                          defaultValue=''
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='form-group col'>
                        <button
                          type='submit'
                          className='btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5'
                          data-loading-text='Cargando...'
                          data-cursor-effect-hover='plus'
                          data-cursor-effect-hover-color='light'
                        >
                          <span>Enviar Mensaje</span>
                        </button>
                        <span><a href="https://www.intercreditosdecolombia.com/AvisoPrivacidad" target="blank"></a></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
}
