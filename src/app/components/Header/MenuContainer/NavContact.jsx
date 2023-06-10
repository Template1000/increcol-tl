import Link from 'next/link'

export default function NavContact () {
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
            href='/'
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
            href='/'
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
            href='/'
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
            href='/'
            data-hash=''
            data-hash-offset={0}
            data-hash-offset-lg={100}
            className='nav-link'
          >
            Como Funciona
          </Link>
        </li>
      </ul>
    </>
  )
}
