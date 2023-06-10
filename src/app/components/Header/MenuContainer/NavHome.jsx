import Link from 'next/link'

export default function NavHome () {
  return (
    <>
      <ul className='nav nav-pills' id='mainNav'>
        <li>
          <Link className='nav-link active' href='/'>
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href='#aboutus'
            data-hash=''
            data-hash-offset={0}
            data-hash-offset-lg={100}
            className='nav-link'
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            href='#services'
            data-hash=''
            data-hash-offset={0}
            data-hash-offset-lg={100}
            className='nav-link'
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            href='#benefits'
            data-hash=''
            data-hash-offset={0}
            data-hash-offset-lg={100}
            className='nav-link'
          >
            Beneficios
          </Link>
        </li>
        <li>
          <Link
            href='#howdoes'
            data-hash=''
            data-hash-offset={0}
            data-hash-offset-lg={100}
            className='nav-link'
          >
            Como funciona
          </Link>
        </li>
      </ul>
    </>
  )
}
