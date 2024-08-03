import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { CardListWrapper } from '@components/lists/SmallCardList/styled';
import { EMPTY_LIST_LENGTH, MESSAGES } from '@constants/values';
import { useFavorites } from '@context/FavoritesContext';
import { Loader } from '@pages/Favorites/FavoriteCardList/styled';
import { renderSmallCards } from '@utils/renderSmallCards';
import React from 'react';
import { JSX } from 'react';

function FavoriteCardList(): JSX.Element {
  const { favorites } = useFavorites();
  const storageIsEmpty = favorites.length === EMPTY_LIST_LENGTH;

  return (
    <ErrorBoundary>
      {!storageIsEmpty ? (
        <CardListWrapper>{renderSmallCards(favorites)}</CardListWrapper>
      ) : (
        <Loader>{MESSAGES.NO_FAVORITES}</Loader>
      )}
    </ErrorBoundary>
  );
}

export default FavoriteCardList;
