import { JSX, memo } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProp {
  isHomePage: boolean;
}

const Header = memo(
  ({ isHomePage = true }: Partial<HeaderProp>): JSX.Element => {
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
            <Link to="favorites" className="header__text --bookmark">
              Your favorites
            </Link>
          </nav>
        </div>
      </header>
    );
  },
);

export default Header;
