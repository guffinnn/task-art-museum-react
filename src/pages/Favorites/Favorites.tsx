import FavoriteCardList from '@components/FavoriteCardList/FavoriteCardList';
import Footer from '@components/Footer/Footer';
import GallerySection from '@components/GallerySection/GallerySection';
import Header from '@components/Header/Header';
import { MESSAGES } from '@constants/favorites';
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
              {MESSAGES.TITLE}{' '}
              <PrimaryText className="--bookmark">
                {MESSAGES.SUBTITLE}
              </PrimaryText>
            </Title>
          </MainSection>
          <GallerySection
            title={MESSAGES.GALLERY_TITLE}
            subtitle={MESSAGES.GALLERY_SUBTITLE}
          >
            <FavoriteCardList />
          </GallerySection>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
