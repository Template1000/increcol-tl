import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SlickCarousel({ children }) {
  const settings = {
    responsive: {
      576: {items: 1}, 
      768: {items: 2}, 
      992: {items: 2}, 
      1200: {items: 2}
    },
    margin: 20, 
    loop: false, 
    nav: false, 
    autoplay: true, 
    autoplayTimeout: 5000, 
    dots: true
  }
  
  return(
    <Slider {...settings}>
      {children}
    </Slider>
  )
}
