import {
  HeaderContainer,
  HeaderLogo,
  HeaderText,
  Menu,
  MenuIcon,
  MenuToggle,
} from '@components/Header/styled';
import { PATH } from '@constants/paths';
import { Wrapper } from '@styles/global';
import { JSX } from 'react';

interface HeaderProps {
  isHomePage?: boolean;
  isArt?: boolean;
}

export function Header({
  isHomePage = true,
  isArt = false,
}: HeaderProps): JSX.Element {
  const home = PATH.TO_HOME;
  const favorites = (): string => {
    if (!isHomePage) {
      if (!isArt) {
        return PATH.EMPTY;
      }
      return PATH.TO_FAVORITES;
    }
    return PATH.FROM_HOME_TO_FAVORITES;
  };

  return (
    <HeaderContainer>
      <Wrapper modificator={'header'}>
        <HeaderLogo></HeaderLogo>
        <MenuToggle type="checkbox" id="menu-toggle" />
        <MenuIcon htmlFor="menu-toggle">☰</MenuIcon>
        <Menu>
          {!isHomePage && (
            <HeaderText to={home} className="--home">
              Home
            </HeaderText>
          )}
          <HeaderText to={favorites()} className="--bookmark">
            Your favorites
          </HeaderText>
        </Menu>
      </Wrapper>
    </HeaderContainer>
  );
}
