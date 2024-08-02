import CardList from '@components/CardList/CardList';
import Footer from '@components/Footer/Footer';
import GallerySection from '@components/GallerySection/GallerySection';
import Header from '@components/Header/Header';
import SearchBar from '@components/SearchBar/SearchBar';
import SearchResultsList from '@components/SearchResultsList/SearchResultsList';
import SmallCardList from '@components/SmallCardList/SmallCardList';
import { URL_ARTWORK, URL_SEARCH } from '@constants/api';
import { MainSection, PrimaryText, Title, Wrapper } from '@styles/global';
import { JSX, useRef, useState } from 'react';
import { ArtInfo } from '@custom-types/artInfo';

function Home(): JSX.Element {
  const [searchResults, setSearchResults] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const requestCount = useRef(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = async (searchTerm: string) => {
    setLoading(true);
    requestCount.current += 1;
    console.log(`Request count: ${requestCount.current}`);
    setSearchTerm(searchTerm);

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
        <Wrapper>
          <MainSection className="--search">
            <Title>
              let&apos;s find some <PrimaryText>art</PrimaryText> here!
            </Title>
            <SearchBar onSearch={handleSearch} setLoading={setLoading} />
          </MainSection>
          {/*OUTPUT SEARCH RESULTS*/}
          {searchTerm.trim().length >= 3 && (
            <GallerySection
              title="Search Results"
              subtitle="Results from your search"
            >
              <SearchResultsList
                loading={loading}
                setLoading={setLoading}
                searchResults={searchResults}
              />
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
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

export default Home;
