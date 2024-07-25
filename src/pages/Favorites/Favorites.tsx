import { JSX } from 'react';
import './Favorites.css';
import Header from '../../components/Header/Header';
import GallerySection from '../../components/GallerySection/GallerySection';
import SmallCardList from '../../components/SmallCardList/SmallCardList';
import Footer from '../../components/Footer/Footer';

function Favorites(): JSX.Element {
  return (
    <>
      <Header isHomePage={false} />
      <main>
        <div className="wrapper">
          <section className="main__section --search">
            <h1>
              here are your{' '}
              <span className="text--primary --bookmark">favorites</span>
            </h1>
          </section>
          <GallerySection title="Your favorites list" subtitle="Saved by you">
            <SmallCardList />
          </GallerySection>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
