const API = process.env.NEXT_PUBLIC_API_URL

const endPoints = {
  mail: {
    send: `${API}/api/v1/mail/send`
  }
}

export default endPoints
