import HeaderContainer from '@/app/components/Header/HeaderContainer'
import HeaderTop from '@/app/components/Header/HeaderTop'

export default function Header () {
  return (
    <>
      <header
        id='header' className='header-effect-shrink'
        data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 85}"
      >
        <div className='header-body border-top-0'>
          <HeaderTop />
          <HeaderContainer />
        </div>
      </header>
    </>
  )
}
