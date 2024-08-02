import { Loader } from '@components/CardList/styled';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { urlArtwork, urlImage } from '@constants/api';
import { useFavorites } from '@context/FavoritesContext';
import { CardButton, Wrapper } from '@styles/global';
import React, { JSX, ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  CardImage,
  InfoContainer,
  Main,
  MainSection,
  StyledText,
} from './styled';
import { ArtInfo } from '@custom-types/artInfo';
import { toCamelCase } from '@utils/camelCase';

const isKnown = (value: ReactNode) => value ?? 'Unknown';

function Art(): JSX.Element {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<ArtInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === artwork?.id);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(urlArtwork({ artworkId: id }));
      const result = await response.json();
      setArtwork(toCamelCase(result.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const {
    artistTitle,
    title,
    dateStart,
    dateEnd,
    placeOfOrigin,
    dimensions,
    creditLine,
    themeTitles,
    isPublicDomain,
    imageId,
  } = artwork || {};

  const clickHandler = () => {
    if (artwork === null) return;

    return toggleFavorite(artwork);
  };

  const themeTitlesArray =
    typeof themeTitles === 'object' && themeTitles !== null
      ? Object.values(themeTitles)
      : [themeTitles];

  const joinedThemeTitles = themeTitlesArray.join(', ');

  return (
    <>
      <Header isHomePage={false} isArt={true} />
      <Main>
        <Wrapper>
          {!loading ? (
            <MainSection className="--description">
              <CardImage image_url={urlImage({ imageId: imageId })}>
                <CardButton
                  data-testid="fav-button"
                  className={`--white ${isFavorite && '--favorite'}`}
                  onClick={clickHandler}
                />
              </CardImage>
              <InfoContainer className="--main">
                <StyledText className="--heading">{isKnown(title)}</StyledText>
                <StyledText className="--subheading">
                  {isKnown(artistTitle)}
                </StyledText>
                <StyledText className="--bold">{`${isKnown(dateStart)}–${isKnown(dateEnd)}`}</StyledText>
              </InfoContainer>
              <InfoContainer className="--overview">
                <StyledText className="--heading">Overview</StyledText>
                <StyledText>
                  <span>Artist nationality: </span>
                  {isKnown(placeOfOrigin)}
                </StyledText>
                <StyledText>
                  <span>Dimensions: </span>
                  {dimensions?.split(';').map((part, index) => {
                    const [title, value] = part.split(':');

                    return value ? (
                      <>
                        <span className="StyledText--bold">
                          {title?.trim()}:
                        </span>{' '}
                        {value?.trim()}
                        {index < dimensions.split(';').length - 1 && '; '}
                      </>
                    ) : (
                      <>{title?.trim()}</>
                    );
                  })}
                </StyledText>
                <StyledText>
                  <span>Credit Line: </span>
                  {isKnown(creditLine)}
                </StyledText>
                <StyledText>
                  <span>Repository: </span>
                  {isKnown(joinedThemeTitles)}
                </StyledText>
                <StyledText>{isPublicDomain ? 'Public' : 'Private'}</StyledText>
              </InfoContainer>
            </MainSection>
          ) : (
            <Loader>Loading...</Loader>
          )}
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default Art;
