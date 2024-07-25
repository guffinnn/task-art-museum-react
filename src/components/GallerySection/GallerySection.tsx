import { JSX, memo } from 'react';
import './GallerySection.css';

interface GallerySectionProps {
  title: string;
  subtitle: string;
  children: JSX.Element;
}

const GallerySection = memo(
  ({ title, subtitle, children }: GallerySectionProps): JSX.Element => {
    return (
      <section className="main__section --gallery">
        <div className="section__text_frame">
          <h3>{title}</h3>
          <h2>{subtitle}</h2>
        </div>
        {children}
      </section>
    );
  },
);

export default GallerySection;
