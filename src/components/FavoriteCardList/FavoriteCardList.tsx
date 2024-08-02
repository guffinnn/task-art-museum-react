import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { Loader } from '@components/FavoriteCardList/styled';
import SmallCard from '@components/SmallCard/SmallCard';
import {
  CardImageSmall,
  CardListWrapper,
} from '@components/SmallCardList/styled';
import { urlImage } from '@constants/api';
import { useFavorites } from '@context/FavoritesContext';
import { JSX, useEffect, useState } from 'react';

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
                  imageUrl={urlImage({ imageId: item.imageId })}
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
