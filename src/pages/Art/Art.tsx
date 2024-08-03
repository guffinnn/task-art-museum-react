import { urlImage } from '@api/images';
import ArtDetails from '@components/ArtDetails/ArtDetails';
import ArtOverview from '@components/ArtOverview/ArtOverview';
import { Loader } from '@components/CardList/styled';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { MESSAGES } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import {
  fetchArtworkData,
  getThemeTitlesArray,
  useFavoriteStatus,
} from '@helpers/artHelpers';
import { CardImage, InfoContainer, Main, MainSection } from '@pages/Art/styled';
import { CardButton, Wrapper } from '@styles/global';
import React, { JSX, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

function Art(): JSX.Element {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<ArtInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const { isFavorite, clickHandler } = useFavoriteStatus(artwork);

  useEffect(() => {
    if (id) {
      fetchArtworkData(id, setLoading, setArtwork);
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
              <CardImage image_url={urlImage({ imageId: imageId })}>
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
    </>
  );
}

export default Art;
