import dynamic from "next/dynamic"

const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false })

export default function OwlCarouselComponent({ children }) {
  const options = {
    // items:3,
    // loop: true,
    // margin: 10,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: true
    // autoplayHoverPause: true
  }
  return(
    <OwlCarousel 
      {...options} 
    >
      {children}
    </OwlCarousel>
  )
}

