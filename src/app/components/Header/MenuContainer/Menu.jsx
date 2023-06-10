'use client'
import { usePathname } from 'next/navigation'
import NavContact from './NavContact'
import NavHome from './NavHome'

export default function Menu () {
  const pathname = usePathname()
  const isContactPage = pathname === '/contactenos'

  return (
    <>
      <div className='header-column justify-content-end w-100'>
        <div className='header-row'>
          <div className='header-nav header-nav-links order-2 order-lg-1'>
            <div
              className='header-nav-main header-nav-main-square header-nav-main-text-capitalize header-nav-main-effect-1 header-nav-main-sub-effect-1'
            >
              <nav className='collapse'>
                {isContactPage ? <NavContact /> : <NavHome />}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
