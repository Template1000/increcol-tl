'use client'
import { useRef } from 'react'
import { sendMail } from '@/app/services/api/send.mail'

export default function FormContact() {
  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      description: formData.get('message')
    }
    sendMail(data).then(response => console.log(response))
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='contact-form form-style-4 form-placeholders-light form-errors-light mb-5 mb-lg-0'
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
      <div className='row'>
        <div className='form-group col'>
          <input
            type='text'
            defaultValue=''
            data-msg-required='Por favor, escriba su número celular.'
            maxLength={100}
            className='form-control text-3 custom-border-color-grey-1 h-auto py-2'
            name='name'
            placeholder='* Número Celular'
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
        </div>
        <span><a href="https://www.intercreditosdecolombia.com/AvisoPrivacidad" target="blank">Aviso de privacidad </a></span>
      </div>
    </form>
  )
}