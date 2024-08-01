import './Favorites.css';

import { JSX } from 'react';

import FavoriteCardList from '../../components/FavoriteCardList/FavoriteCardList';
import Footer from '../../components/Footer/Footer';
import GallerySection from '../../components/GallerySection/GallerySection';
import Header from '../../components/Header/Header';

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
            <FavoriteCardList />
          </GallerySection>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
