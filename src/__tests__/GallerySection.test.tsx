import { render, screen } from '@testing-library/react';
import { JSX } from 'react';

import GallerySection from '@components/GallerySection/GallerySection';

interface GallerySectionProps {
  title: string;
  subtitle: string;
  children: JSX.Element;
}

test('Should render GallerySection', () => {
  const props: GallerySectionProps = {
    title: 'Title',
    subtitle: 'Subtitle',
    children: <></>,
  };

  render(
    <GallerySection title={props.title} subtitle={props.subtitle}>
      {props.children}
    </GallerySection>,
  );

  const element = screen.getByText('Title');
  expect(element).toBeDefined();
});
