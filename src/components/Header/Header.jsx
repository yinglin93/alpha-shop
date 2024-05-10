// 尚未完成
import toggleIcon from '../../Assets/icons/toggle.svg';
import SearchIcon from '../../Assets/icons/search.svg';
import CartIcon from '../../Assets/icons/cart.svg';
import MoonIcon from '../../Assets/icons/moon.svg';
// import SunIcon from '../../Assets/icons/sun.svg';
import LogoIcon from '../../Assets/icons/logo.svg';

import './header.scss';

function NavItem({item}){
  return (
    <li className="nav-item">
      <a className="nav-link" href="">
        {item}
      </a>
    </li>
  );
}

function Header() {
  return (
    <>
      {/* header */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* navbar-toggle */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <img src={toggleIcon} className="icon-toggle cursor-point" alt='toggle'/>
          </label>
          {/* navbar-menu */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <NavItem item = '男裝'/>
              <NavItem item = '女裝'/>
              <NavItem item = '最新消息'/>
              <NavItem item = '客製商品'/>
              <NavItem item = '聯絡我們'/>
            </ul>
            <ul className="nav-list site-action-list">
              {/* search */}
              <li className="nav-item">
                <img src={SearchIcon} className="nav-icon cursor-point" alt="SearchIcon"/>
              </li>
              {/* cart */}
              <li className="nav-item">
                <img src={CartIcon} className="nav-icon cursor-point" alt="CartIcon"/>
              </li>
              <li id="theme-toggle" className="nav-item">
                {/* moon */}
                <img src={MoonIcon} className="nav-icon cursor-point" alt="MoonIcon"/>
                {/* sun */}
                {/* <img src={SunIcon} className="nav-icon cursor-point" alt="SunIcon"/> */}
              </li>
            </ul>
          </nav>
          {/* logo */}
          <a className="header-logo-container" href="">
            <img src={LogoIcon} className="cursor-point" alt="Logo"/>
          </a>
        </div>
      </header>
    </>
  );
}


export default Header