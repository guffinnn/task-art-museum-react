import React, { JSX, useEffect, useState } from 'react';
import './Art.css';
import { Loader } from '../../components/CardList/styled';
import { CardImage } from './styled';
import { useParams } from 'react-router-dom';
import { ArtInfo, URL_ARTWORK, URL_IMAGE } from '../../constants/api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useFavorites } from '../../context/FavoritesContext';

const isKnown = (value: any) => value ?? 'Unknown';

function Art(): JSX.Element {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<ArtInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === artwork?.id);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL_ARTWORK({ artworkId: id }));
      const result = await response.json();
      setArtwork(result.data);
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
    artist_title,
    title,
    date_start,
    date_end,
    place_of_origin,
    dimensions,
    credit_line,
    theme_titles,
    is_public_domain,
    image_id,
  } = artwork || {};

  const clickHandler = () => {
    if (artwork === null) return;

    return toggleFavorite(artwork);
  };

  return (
    <>
      <Header isHomePage={false} isArt={true} />
      <main id="main">
        <div className="wrapper">
          {!loading ? (
            <section className="main__section --description">
              <CardImage image_url={URL_IMAGE({ imageId: image_id })}>
                <div
                  className={`button --white ${isFavorite && '--favorite'}`}
                  onClick={clickHandler}
                ></div>
              </CardImage>
              <div className="info__container --main">
                <p className="text --heading">{isKnown(title)}</p>
                <p className="text --subheading">{isKnown(artist_title)}</p>
                <p className="text --bold">{`${isKnown(date_start)}–${isKnown(date_end)}`}</p>
              </div>
              <div className="info__container --overview">
                <p className="text --heading">Overview</p>
                <p className="text">
                  <span>Artist nationality: </span>
                  {isKnown(place_of_origin)}
                </p>
                <p className="text">
                  <span>Dimensions: </span>
                  {dimensions?.split(';').map((part, index) => {
                    const [title, value] = part.split(':');

                    return value ? (
                      <>
                        <span className="text--bold">{title?.trim()}:</span>{' '}
                        {value?.trim()}
                        {index < dimensions.split(';').length - 1 && '; '}
                      </>
                    ) : (
                      <>{title?.trim()}</>
                    );
                  })}
                </p>
                <p className="text">
                  <span>Credit Line: </span>
                  {isKnown(credit_line)}
                </p>
                <p className="text">
                  <span>Repository: </span>
                  {isKnown(theme_titles?.join(', '))}
                </p>
                <p className="text">
                  {is_public_domain ? 'Public' : 'Private'}
                </p>
              </div>
            </section>
          ) : (
            <Loader>Loading...</Loader>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Art;
