import axios from 'axios'
import endPoints from '.'

const sendMail = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-type': 'application/json'
    }
  }
  const response = await axios.post(endPoints.mail.send, body, config)
  return response.data
}

export { sendMail }
