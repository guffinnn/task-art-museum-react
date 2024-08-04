import { ErrorDisplay } from '@components/error/ErrorDisplay';
import { Footer } from '@components/Footer/Footer';
import { GallerySection } from '@components/GallerySection/GallerySection';
import { Header } from '@components/Header/Header';
import { CardList } from '@components/lists/CardList/CardList';
import { SearchResultsList } from '@components/lists/SearchResultsList/SearchResultsList';
import { SmallCardList } from '@components/lists/SmallCardList/SmallCardList';
import { SearchBar } from '@components/SearchBar/SearchBar';
import { MESSAGES } from '@constants/home';
import { MIN_SEARCH_TERM_LENGTH } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import { fetchSearchResults } from '@helpers/homeHelpers';
import { useErrorHandler } from '@hooks/useErrorHandler';
import { MainSection, PrimaryText, Title, Wrapper } from '@styles/global';
import { JSX, memo, useCallback, useRef, useState } from 'react';

function HomePage(): JSX.Element {
  const [searchResults, setSearchResults] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const requestCount = useRef(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { error, setError } = useErrorHandler();

  const handleSearch = useCallback(
    async (searchTerm: string) => {
      await fetchSearchResults(
        searchTerm,
        setLoading,
        setSearchResults,
        requestCount,
        setError,
      );
      setSearchTerm(searchTerm);
    },
    [setLoading, setSearchResults, requestCount],
  );

  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <MainSection className="--search">
            <Title>
              let's find some <PrimaryText>art</PrimaryText> here!
            </Title>
            <SearchBar onSearch={handleSearch} setLoading={setLoading} />
          </MainSection>
          {searchTerm.trim().length >= MIN_SEARCH_TERM_LENGTH && (
            <GallerySection
              title={MESSAGES.SEARCH_RESULTS_TITLE}
              subtitle={MESSAGES.SEARCH_RESULTS_SUBTITLE}
            >
              <SearchResultsList
                loading={loading}
                setLoading={setLoading}
                searchResults={searchResults}
              />
            </GallerySection>
          )}
          <GallerySection
            title={MESSAGES.TOPICS_TITLE}
            subtitle={MESSAGES.TOPICS_SUBTITLE}
          >
            <CardList />
          </GallerySection>
          <GallerySection
            title={MESSAGES.MORE_TITLE}
            subtitle={MESSAGES.MORE_SUBTITLE}
          >
            <SmallCardList />
          </GallerySection>
        </Wrapper>
      </main>
      <Footer />
      <ErrorDisplay error={error} />
    </>
  );
}

export const Home = memo(HomePage);
