import 'bootstrap/dist/css/bootstrap.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import './assets/vendor/animate/animate.compat.css'
import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/vendor/magnific-popup/magnific-popup.min.css'

import './assets/css/theme-blog.css'
import './assets/css/theme-elements.css'
import './assets/css/theme-shop.css'
import './assets/css/theme.css'

import './assets/css/demos/demo-business-consulting-3.css'
import './assets/css/skins/skin-business-consulting-3.css'

import Footer from './components/Footer/Footer'
import WhatsappButton from './components/WhatsappButton'
import Header from './containers/Header/Header'

export const metadata = {
  title: 'InterCréditos de Colombia | Financiera Online a Tú Alcancé',
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
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  )
}
