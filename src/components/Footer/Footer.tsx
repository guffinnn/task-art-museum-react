import {
  FooterContainer,
  FooterLogoModsen,
  FooterLogoMuseum,
} from '@components/Footer/styled';
import { Wrapper } from '@styles/global';
import { JSX } from 'react';

export function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <Wrapper modificator={'footer'}>
        <FooterLogoMuseum></FooterLogoMuseum>
        <FooterLogoModsen></FooterLogoModsen>
      </Wrapper>
    </FooterContainer>
  );
}
