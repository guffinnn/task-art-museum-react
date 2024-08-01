import FavoriteCardList from '@components/FavoriteCardList/FavoriteCardList';
import Footer from '@components/Footer/Footer';
import GallerySection from '@components/GallerySection/GallerySection';
import Header from '@components/Header/Header';
import { MainSection, PrimaryText, Title, Wrapper } from '@styles/global';
import { JSX } from 'react';

function Favorites(): JSX.Element {
  return (
    <>
      <Header isHomePage={false} />
      <main>
        <Wrapper>
          <MainSection className="--search">
            <Title>
              here are your{' '}
              <PrimaryText className="--bookmark">favorites</PrimaryText>
            </Title>
          </MainSection>
          <GallerySection title="Your favorites list" subtitle="Saved by you">
            <FavoriteCardList />
          </GallerySection>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
