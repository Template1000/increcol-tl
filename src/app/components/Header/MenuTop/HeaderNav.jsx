import Image from 'next/image'
import Link from 'next/link'

export default function HeaderNav () {
  return (
    <>
      <nav className='header-nav-top w-100 w-md-50pct w-xl-100pct'>
        <ul className='nav nav-pills d-inline-flex custom-header-top-nav-background pe-5'>
          <li className='nav-item py-2 d-inline-flex z-index-1'>
            <span className='d-flex align-items-center p-0'>
              <span>
                <Image
                  width={25}
                  height={25}
                  src='/img/demos/business-consulting-3/icons/phone.svg'
                  alt='Phone Icon'
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}"
                />
              </span>
              <Link
                className='text-color-light text-decoration-none font-weight-semibold text-3-5 ms-2'
                href='tel:+573222695802'
                data-cursor-effect-hover='plus'
                data-cursor-effect-hover-color='light'
              >
                (322) 269-5802
              </Link>
            </span>
            <span className='font-weight-normal align-items-center px-0 d-none d-xl-flex ms-3'>
              <span>
                <Image
                  width={25}
                  height={25}
                  src='/img/demos/business-consulting-3/icons/phone.svg'
                  alt='Phone Icon'
                  data-icon=''
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}"
                />
              </span>
              <Link
                className='text-color-light text-decoration-none font-weight-semibold text-3-5 ms-2'
                href='tel:+573222695807'
                data-cursor-effect-hover='plus'
                data-cursor-effect-hover-color='light'
              >
                (322) 269-5807
              </Link>
            </span>
          </li>
        </ul>
      </nav>
    </>
  )
}
