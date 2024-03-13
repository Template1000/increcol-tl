import Image from 'next/image'
import Link from 'next/link'

export default function Logo () {
  return (
    <>
      <div className='header-column'>
        <div className='header-row'>
          <div className='header-logo'>
            <Link href='/'>
              <Image alt='Porto' width={246} height={55} src='/img/demos/business-consulting-3/logo.png' />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
