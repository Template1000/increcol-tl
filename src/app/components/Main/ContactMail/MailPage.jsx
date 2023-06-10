export default function MailPage () {
  return (
    <>
      <div
        className='position-absolute top-0 right-0 overlay overlay-show overlay-color-primary overlay-op-9 h-100 lazyload d-none d-md-block'
        data-bg-src='img/demos/business-consulting-3/backgrounds/background-2.jpg'
        style={{
          width: '32%',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className='container'>
        <div className='row align-items-center pt-5 pb-xl-5 mt-5'>
          <div className='col-md-7 col-lg-8 py-4 my-2 ms-md-3 ms-lg-0'>
            <h2
              className='custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={250}
            >
              PONTE EN CONTACTO
            </h2>
            <h3
              className='text-9 line-height-3 text-transform-none font-weight-medium text-color-light ls-0 mb-3 pb-1 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={500}
            >
              Envíanos un mensaje y conoce más sobre nuestros servicios
            </h3>
            <p
              className='text-3-5 pb-3 mb-4 appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={750}
            >
              ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus metas económicas!{' '}
            </p>
            <form
              className='contact-form form-style-4 form-placeholders-light form-errors-light appear-animation'
              data-appear-animation='fadeInUpShorter'
              data-appear-animation-delay={1000}
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
                <div
                  className='form-group col appear-animation'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay={1250}
                >
                  <button
                    type='submit'
                    className='btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5'
                    data-loading-text='Cargando...'
                    data-cursor-effect-hover='plus'
                    data-cursor-effect-hover-color='light'
                  >
                    <span>Enviar Mensaje</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
