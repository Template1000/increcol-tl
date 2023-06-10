import Link from 'next/link'

export default function Button () {
  return (
    <>
      <div
        className='header-column header-column-search justify-content-end align-items-center d-flex w-auto flex-row'
      >
        <Link
          href='/contactenos'
          className='btn btn-dark custom-btn-style-1 font-weight-semibold text-3-5 btn-px-3 py-2 ws-nowrap ms-4 d-none d-lg-block'
          data-cursor-effect-hover='plus' data-cursor-effect-hover-color='light'
        >
          <span>Contáctenos</span>
        </Link>
        <button
          className='btn header-btn-collapse-nav' data-bs-toggle='collapse'
          data-bs-target='.header-nav-main nav'
        >
          <i className='fas fa-bars' />
        </button>
      </div>
    </>
  )
}
