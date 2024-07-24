import { JSX } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import GallerySection from '../../components/GallerySection/GallerySection';
import CardList from '../../components/CardList/CardList';
import SmallCardList from '../../components/SmallCardList/SmallCardList';
import Footer from '../../components/Footer/Footer';

function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <section className="main__section --search">
            <h1>
              let's find some <span className="text--primary">art</span> here!
            </h1>
            <SearchBar />
          </section>
          <GallerySection title="Topics for you" subtitle="Our special gallery">
            <CardList />
          </GallerySection>
          <GallerySection title="Here some more" subtitle="Other works for you">
            <SmallCardList />
          </GallerySection>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
