import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { Loader } from '@components/FavoriteCardList/styled';
import SmallCard from '@components/SmallCard/SmallCard';
import {
  CardImageSmall,
  CardListWrapper,
} from '@components/SmallCardList/styled';
import { EMPTY_LIST_LENGTH } from '@constants/values';
import { useFavorites } from '@context/FavoritesContext';
import { ArtInfo } from '@custom-types/artInfo';
import { urlImage } from '@utils/api/api';
import React, { memo, useCallback } from 'react';
import { JSX } from 'react';

function FavoriteCardList(): JSX.Element {
  const { favorites } = useFavorites();
  const storageIsEmpty = favorites.length === EMPTY_LIST_LENGTH;

  const renderFavoriteCard = useCallback(
    (item: ArtInfo, index: number) => (
      <SmallCard key={index} item={item}>
        <CardImageSmall imageUrl={urlImage({ imageId: item.imageId })} />
      </SmallCard>
    ),
    [favorites],
  );

  return (
    <ErrorBoundary>
      {!storageIsEmpty ? (
        <CardListWrapper>{favorites.map(renderFavoriteCard)}</CardListWrapper>
      ) : (
        <Loader>No favorites yet.</Loader>
      )}
    </ErrorBoundary>
  );
}

export default memo(FavoriteCardList);
