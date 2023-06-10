import Carousel from './Carousel/Carousel'
import Description from './Description/Description'

export default function About () {
  return (
    <>
      <div className='container' style={{ marginTop: '-310px' }}>
        <Carousel />
        <Description />
      </div>
    </>
  )
}
