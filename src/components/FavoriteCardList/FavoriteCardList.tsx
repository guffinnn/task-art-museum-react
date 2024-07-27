import { JSX, useEffect, useMemo, useState } from 'react';
import { CardImageSmall, CardListWrapper } from '../SmallCardList/styled';
import { Loader } from './styled';
import { URL_IMAGE } from '../../constants/api';
import { useFavorites } from '../../context/FavoritesContext';
import SmallCard from '../SmallCard/SmallCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function FavoriteCardList(): JSX.Element {
  const { favorites } = useFavorites();
  const [storageIsEmpty, setStorageIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    if (favorites.length > 0) {
      setStorageIsEmpty(false);
    } else {
      setStorageIsEmpty(true);
    }
  }, [favorites]);

  return (
    <ErrorBoundary>
      {!storageIsEmpty ? (
        <>
          <CardListWrapper>
            {favorites.map((item, index) => (
              <SmallCard key={index} item={item}>
                <CardImageSmall
                  image_url={URL_IMAGE({ imageId: item.image_id })}
                />
              </SmallCard>
            ))}
          </CardListWrapper>
        </>
      ) : (
        <Loader>No favorites yet.</Loader>
      )}
    </ErrorBoundary>
  );
}

export default FavoriteCardList;
