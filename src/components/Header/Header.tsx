import { JSX } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(): JSX.Element {
  return (
    <header>
      <div className="wrapper">
        <div className="header__logo"></div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰
        </label>
        <nav className="menu">
          <Link to="favorites" className="header__text">
            Your favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
