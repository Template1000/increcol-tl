import Button from './MenuContainer/Button'
import Logo from './MenuContainer/Logo'
import Menu from './MenuContainer/Menu'

export default function HeaderContainer () {
  return (
    <>
      <div className='header-container container' style={{ height: 117 }}>
        <div className='header-row'>
          <Logo />
          <Menu />
          <Button />
        </div>
      </div>
    </>
  )
}
