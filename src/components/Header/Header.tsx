import { JSX } from 'react';
import './Header.css';

function Header(): JSX.Element {
  return (
    <header>
      <div className="wrapper">
        <div className="header__logo"></div>
        <a href="#" className="header__text">
          Your favorites
        </a>
      </div>
    </header>
  );
}

export default Header;
