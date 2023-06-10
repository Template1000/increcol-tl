import HeaderItems from './MenuTop/HeaderItems'
import HeaderNav from './MenuTop/HeaderNav'

export default function HeaderTop () {
  return (
    <>
      <div className='header-top header-top-default header-top-borders border-bottom-0 bg-color-light'>
        <div className='container'>
          <div className='header-row'>
            <div className='header-column justify-content-between'>
              <div className='header-row'>
                <HeaderNav />
                <HeaderItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
