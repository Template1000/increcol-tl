import Image from 'next/image'

export default function Brands () {
  return (
    <>
      <div className='container-fluid pt-5 mt-5 mb-4'>
        <div className='row'>
          <div
            className='col appear-animation'
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay={250}
          >
            <div
              className='owl-carousel owl-theme carousel-center-active-item custom-carousel-vertical-center-items custom-dots-style-1'
              // data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 3}, '768': {'items': 3}, '992': {'items': 5}, '1200': {'items': 5}, '1600': {'items': 7}}, 'autoplay': false, 'autoplayTimeout': 3000, 'dots': true}"
            >
              <div className='text-center'>
                <Image
                  width={134}
                  height={71}
                  className='d-inline-block img-fluid'
                  src='/img/logos/logo-8.png'
                  alt=''
                  style={{ maxWidth: 90 }}
                />
              </div>
              <div className='text-center'>
                <Image
                  width={323}
                  height={84}
                  className='d-inline-block img-fluid'
                  src='/img/logos/logo-9.png'
                  alt=''
                  style={{ maxWidth: 140 }}
                />
              </div>
              <div className='text-center'>
                <Image
                  width={302}
                  height={34}
                  className='d-inline-block img-fluid'
                  src='/img/logos/logo-10.png'
                  alt=''
                  style={{ maxWidth: 140 }}
                />
              </div>
              <div className='text-center'>
                <Image
                  width={402}
                  height={126}
                  className='d-inline-block img-fluid'
                  src='/img/logos/logo-11.png'
                  alt=''
                  style={{ maxWidth: 140 }}
                />
              </div>
              <div className='text-center'>
                <Image
                  width={185}
                  height={71}
                  className='d-inline-block img-fluid'
                  src='/img/logos/logo-12.png'
                  alt=''
                  style={{ maxWidth: 100 }}
                />
              </div>
              <div className='text-center'>
                <Image
                  width={296}
                  height={115}
                  className='d-inline-block img-fluid'
                  src='/img/logos/logo-13.png'
                  alt=''
                  style={{ maxWidth: 100 }}
                />
              </div>
              <div className='text-center'>
                <Image
                  width={281}
                  height={77}
                  className='d-inline-block img-fluid'
                  src='/img/logos/logo-14.png'
                  alt=''
                  style={{ maxWidth: 140 }}
                />
              </div>
              <div className='text-center'>
                <Image
                  width={197}
                  height={117}
                  className='d-inline-block img-fluid'
                  src='/img/logos/logo-15.png'
                  alt=''
                  style={{ maxWidth: 110 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
