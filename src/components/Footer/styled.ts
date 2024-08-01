import modsenLogo from '@assets/modsen-logo.svg';
import museumLogo from '@assets/museum-logo--black.svg';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;
  background: var(--white);
  bottom: 0;
`;

export const FooterLogoMuseum = styled.div`
  width: 206px;
  height: 63px;
  background: url(${museumLogo}) no-repeat center center;
  background-size: contain;

  @media (max-width: 720px) {
    width: 150px;
    height: 40px;
  }
`;

export const FooterLogoModsen = styled.div`
  width: 164px;
  height: 60px;
  background: url(${modsenLogo}) no-repeat center center;
  background-size: contain;

  @media (max-width: 720px) {
    width: 150px;
    height: 40px;
  }
`;
