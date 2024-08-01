import './Header.css';

import { JSX, memo } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProp {
  isHomePage: boolean;
  isArt: boolean;
}

function Header({
  isHomePage = true,
  isArt = false,
}: Partial<HeaderProp>): JSX.Element {
  const favoritesPath = !isHomePage
    ? !isArt
      ? ''
      : '/task-art-museum-react/favorites'
    : 'favorites';

  return (
    <header>
      <div className="wrapper">
        <div className="header__logo"></div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰
        </label>
        <nav className="menu">
          {!isHomePage && (
            <Link to="/task-art-museum-react" className="header__text --home">
              Home
            </Link>
          )}
          <Link to={favoritesPath} className="header__text --bookmark">
            Your favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);
