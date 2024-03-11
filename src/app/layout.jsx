import 'bootstrap/dist/css/bootstrap.css'
import './assets/vendor/animate/animate.compat.css'
import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/vendor/owl.carousel/owl.carousel.min.css'
import './assets/vendor/owl.carousel/owl.theme.default.min.css'

import './assets/css/theme-elements.css'
import './assets/css/theme.css'

import './assets/css/demos/demo-business-consulting-3.css'
import './assets/css/skins/skin-business-consulting-3.css'

import 'react-toastify/dist/ReactToastify.min.css'

import Footer from './components/Footer/Footer'
import WhatsappButton from './components/WhatsappButton'
import Header from './containers/Header/Header'
import GoogleAnalytics from './components/Gtag'

export const metadata = {
  title: 'Inter Financiera | Financiera Online a Tú Alcancé',
  description: 'Descubre la solución financiera perfecta para tus necesidades con nuestros préstamos rápidos y confiables. ¡Obtén el dinero que necesitas ahora!',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  )
}
