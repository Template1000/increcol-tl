'use client'
import { useRef } from 'react'
import { sendMail } from '@/app/services/api/send.mail'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'

export default function Form () {
  const router = useRouter()
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
    sendMail(data)
      .then(response => {
        toast.success('¡Correcto, mensaje enviado!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      })
      .then(response => router.push('/thank-you'))
      .catch(error => {
        const textError = error.response.data.message
        const textName = '"name"'
        const textEmail = '"email"'
        const textPhone = '"phone"'
        const textDescription = '"description"'

        if (textError.includes(textName)) {
          toast.error('Error, por favor valide el campo nombre.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }

        if (textError.includes(textEmail)) {
          toast.error('Error, por favor valide el campo correo.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }

        if (textError.includes(textPhone)) {
          toast.error('Error, por favor valide el campo número celular.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }

        if (textError.includes(textDescription)) {
          toast.error('Error, por favor valide el campo mensaje.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }
      })
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='contact-form form-style-2 form-errors-light mb-3 mb-lg-0'
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
            name='phone'
            placeholder='* Número Celular'
            required=''
          />
        </div>
      </div>
      <div className='row mb-2'>
        <div className='form-group col'>
          <textarea
            maxLength={5000}
            data-msg-required='Por favor ingrese su mensaje.'
            rows={2}
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
        <span><a href="https://www.interfinanciera.com/AvisoPrivacidad" target="blank">Aviso de privacidad </a></span>
      </div>
      <ToastContainer />
    </form>
  )
};
