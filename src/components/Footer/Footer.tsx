import { JSX } from 'react';
import './Footer.css';

function Footer(): JSX.Element {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer__logo--gallery"></div>
        <div className="footer__logo--modsen"></div>
      </div>
    </footer>
  );
}

export default Footer;
