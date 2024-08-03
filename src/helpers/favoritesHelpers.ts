import { ArtInfo } from '@custom-types/artInfo';

export const getSavedFavorites = (): ArtInfo[] => {
  const savedFavorites = localStorage.getItem('favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

export const saveFavorites = (favorites: ArtInfo[]): void => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const updateFavorites = (
  favorites: ArtInfo[],
  item: ArtInfo,
): ArtInfo[] => {
  const isFavorite = favorites.some((fav) => fav.id === item.id);
  if (isFavorite) {
    return favorites.filter((fav) => fav.id !== item.id);
  } else {
    return [...favorites, item];
  }
};
