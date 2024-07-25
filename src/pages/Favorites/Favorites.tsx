import { JSX } from 'react';
import './Favorites.css';
import Header from '../../components/Header/Header';
import GallerySection from '../../components/GallerySection/GallerySection';
import Footer from '../../components/Footer/Footer';
import FavoriteCardList from '../../components/FavoriteCardList/FavoriteCardList';

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
