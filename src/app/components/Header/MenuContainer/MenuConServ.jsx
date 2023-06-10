import Link from 'next/link'

export default function Menu () {
  return (
    <>
      <div className='header-column justify-content-end w-100'>
        <div className='header-row'>
          <div className='header-nav header-nav-links order-2 order-lg-1'>
            <div
              className='header-nav-main header-nav-main-square header-nav-main-text-capitalize header-nav-main-effect-1 header-nav-main-sub-effect-1'
            >
              <nav className='collapse'>
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
                  <li className='dropdown'>
                    <Link className='nav-link dropdown-toggle' href='/servicios'>
                      Servicios
                    </Link>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link href='/servicios/prestamos-libres' className='dropdown-item'>
                          Préstamos Libres
                        </Link>
                      </li>
                      <li>
                        <Link href='/servicios/linea-de-credito' className='dropdown-item'>
                          Líneas De Crédito
                        </Link>
                      </li>
                      <li>
                        <Link href='/servicios/credito-hipotecario' className='dropdown-item'>
                          Crédito Hipotecario
                        </Link>
                      </li>
                      <li>
                        <Link href='/servicios/cuenta-de-ahorro' className='dropdown-item'>
                          Cuenta De Ahorro
                        </Link>
                      </li>
                      <li>
                        <Link href='/servicios/tarjeta-de-credito' className='dropdown-item'>
                          Tarjetas De Crédito
                        </Link>
                      </li>
                      <li>
                        <Link href='/servicios/inversiones-y-asesoramiento' className='dropdown-item'>
                          Inversiones y Asesoramiento
                        </Link>
                      </li>
                    </ul>
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
