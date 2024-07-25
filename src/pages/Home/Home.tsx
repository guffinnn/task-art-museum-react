import { JSX, useState } from 'react';
import './Home.css';
import {
  CardListWrapper,
  CardImageSmall,
} from '../../components/SmallCardList/styled';
import { Loader } from '../../components/CardList/styled';
import {
  ArtInfo,
  URL_ARTWORK,
  URL_IMAGE,
  URL_SEARCH,
} from '../../constants/api';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import GallerySection from '../../components/GallerySection/GallerySection';
import CardList from '../../components/CardList/CardList';
import SmallCardList from '../../components/SmallCardList/SmallCardList';
import SmallCard from '../../components/SmallCard/SmallCard';
import Footer from '../../components/Footer/Footer';

function Home(): JSX.Element {
  const [searchResults, setSearchResults] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (searchTerm: string) => {
    setLoading(true);

    try {
      const response = await fetch(URL_SEARCH({ searchTerm }));
      const result = await response.json();
      const artworks = result.data;

      const detailedArtworks = await Promise.all(
        artworks.map(async (artwork: { id: number }) => {
          const detailResponse = await fetch(
            URL_ARTWORK({ artworkId: artwork.id }),
          );
          const detailResult = await detailResponse.json();
          return detailResult.data;
        }),
      );

      setSearchResults(detailedArtworks);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <section className="main__section --search">
            <h1>
              let's find some <span className="text--primary">art</span> here!
            </h1>
            <SearchBar onSearch={handleSearch} />
          </section>
          {/*OUTPUT SEARCH RESULTS*/}
          {searchResults.length > 0 && (
            <GallerySection
              title="Search Results"
              subtitle="Results from your search"
            >
              {!loading ? (
                <CardListWrapper>
                  {searchResults.map((item, index) => (
                    <SmallCard
                      key={index}
                      title={item.title}
                      artist_title={item.artist_title}
                      is_public_domain={item.is_public_domain}
                    >
                      <CardImageSmall
                        image_url={URL_IMAGE({ imageId: item.image_id })}
                      />
                    </SmallCard>
                  ))}
                </CardListWrapper>
              ) : (
                <Loader>Loading...</Loader>
              )}
            </GallerySection>
          )}
          {/*SECTION WITH PAGINATION*/}
          <GallerySection title="Topics for you" subtitle="Our special gallery">
            <CardList />
          </GallerySection>
          {/*SECTION WITH OTHER WORKS*/}
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
