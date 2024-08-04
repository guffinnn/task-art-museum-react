import { urlImage } from '@api/images';
import { ErrorDisplay } from '@components/error/ErrorDisplay';
import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { Loader } from '@components/lists/CardList/styled';
import { MESSAGES } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import {
  fetchArtworkData,
  getThemeTitlesArray,
  useFavoriteStatus,
} from '@helpers/artHelpers';
import { useErrorHandler } from '@hooks/useErrorHandler';
import { ArtDetails } from '@pages/Art/ArtDetails/ArtDetails';
import { ArtOverview } from '@pages/Art/ArtOverview/ArtOverview';
import { CardImage, InfoContainer, Main, MainSection } from '@pages/Art/styled';
import { CardButton, Wrapper } from '@styles/global';
import React, { JSX, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Art(): JSX.Element {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [artwork, setArtwork] = useState<ArtInfo | null>(null);
  const { error, setError } = useErrorHandler();
  const { isFavorite, clickHandler } = useFavoriteStatus(artwork);

  useEffect(() => {
    if (id) {
      fetchArtworkData(id, setLoading, setArtwork, setError);
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

  const themeTitlesArray = useMemo(
    () => getThemeTitlesArray(themeTitles),
    [themeTitles],
  );
  const joinedThemeTitles = themeTitlesArray.join(', ');

  return (
    <>
      <Header isHomePage={false} isArt={true} />
      <Main>
        <Wrapper>
          {!loading ? (
            <MainSection className="--description">
              <CardImage imageurl={urlImage({ imageId: imageId })}>
                <CardButton
                  data-testid="fav-button"
                  className={`--white ${isFavorite && '--favorite'}`}
                  onClick={clickHandler}
                />
              </CardImage>
              <InfoContainer className="--main">
                <ArtDetails
                  title={title}
                  artistTitle={artistTitle}
                  dateStart={dateStart}
                  dateEnd={dateEnd}
                />
              </InfoContainer>
              <InfoContainer className="--overview">
                <ArtOverview
                  placeOfOrigin={placeOfOrigin}
                  dimensions={dimensions}
                  creditLine={creditLine}
                  joinedThemeTitles={joinedThemeTitles}
                  isPublicDomain={isPublicDomain}
                />
              </InfoContainer>
            </MainSection>
          ) : (
            <Loader>{MESSAGES.LOADING}</Loader>
          )}
        </Wrapper>
      </Main>
      <Footer />
      <ErrorDisplay error={error} />
    </>
  );
}
