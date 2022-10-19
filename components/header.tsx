import MenuHeader from './menu/header'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="navbar is-sticky" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <Link href="/">
                <a className="navbar-item" href="/">
                  <img src="/img/logo.png" className="logo"/>
                </a>
              </Link>
              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>
          <MenuHeader/>
    </nav>
  )
}

export default Header
