import {
  Section,
  SectionTextFrame,
  Subtitle,
  Title,
} from '@components/GallerySection/styled';
import { JSX } from 'react';

interface GallerySectionProps {
  title: string;
  subtitle: string;
  children: JSX.Element;
}

export function GallerySection({
  title,
  subtitle,
  children,
}: GallerySectionProps): JSX.Element {
  return (
    <Section>
      <SectionTextFrame>
        <Subtitle>{title}</Subtitle>
        <Title>{subtitle}</Title>
      </SectionTextFrame>
      {children}
    </Section>
  );
}
