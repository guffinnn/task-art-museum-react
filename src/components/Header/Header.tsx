import {
  HeaderContainer,
  HeaderLogo,
  HeaderText,
  Menu,
  MenuIcon,
  MenuToggle,
} from '@components/Header/styled';
import { Wrapper } from '@styles/global';
import { JSX, memo } from 'react';

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
    <HeaderContainer>
      <Wrapper modificator={'header'}>
        <HeaderLogo></HeaderLogo>
        <MenuToggle type="checkbox" id="menu-toggle" />
        <MenuIcon htmlFor="menu-toggle">☰</MenuIcon>
        <Menu>
          {!isHomePage && (
            <HeaderText to="/task-art-museum-react" className="--home">
              Home
            </HeaderText>
          )}
          <HeaderText to={favoritesPath} className="--bookmark">
            Your favorites
          </HeaderText>
        </Menu>
      </Wrapper>
    </HeaderContainer>
  );
}

export default memo(Header);
