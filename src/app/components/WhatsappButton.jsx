'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsappButton () {
  return (
    <FloatingWhatsApp
      phoneNumber={`+57${process.env.NEXT_PUBLIC_PHONE_WHATSAPP}`}
      accountName='Javier Rodríguez'
      chatMessage={'¡Hola! 🤝 \n¿En qué podemos ayudarte?'}
      placeholder='Mensaje'
      avatar='/img/demos/business-consulting-3/team/team-5.jpg'
      statusMessage='Normalmente responde en 15 min'
      messageDelay={1}
      notification
      notificationDelay={20}
      notificationSound
    />
  )
}
