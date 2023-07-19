import axios from 'axios'

const sendMail = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-type': 'application/json'
    }
  }
  const response = await axios.post('https://app.intercreditosdecolombia.com/api/v1/mail/send', body, config)
  return response.data
}

export { sendMail }
