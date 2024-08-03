import { getArtworkData } from '@api/artworks';
import { ERROR } from '@constants/errors';
import { DEFAULT_TEXT } from '@constants/values';
import { useFavorites } from '@context/FavoritesContext';
import { ArtInfo } from '@custom-types/artInfo';
import React, { JSX, useCallback, useMemo } from 'react';

export const fetchArtworkData = async (
  id: string,
  setLoading: (loading: boolean) => void,
  setArtwork: (artwork: ArtInfo | null) => void,
) => {
  setLoading(true);
  try {
    const result = await getArtworkData(id);
    setArtwork(result);
  } catch (error) {
    console.error(ERROR.INVALID_FETCH, error);
  } finally {
    setLoading(false);
  }
};

export const useFavoriteStatus = (artwork: ArtInfo | null) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = useMemo(
    () => favorites.some((fav) => fav.id === artwork?.id),
    [favorites, artwork?.id],
  );

  const clickHandler = useCallback(() => {
    if (artwork) {
      toggleFavorite(artwork);
    }
  }, [artwork, toggleFavorite]);

  return { isFavorite, clickHandler };
};

export const getThemeTitlesArray = (
  themeTitles:
    | string
    | Record<string, unknown>
    | (string | Record<string, unknown>)[]
    | undefined,
): string[] => {
  if (typeof themeTitles === 'string') {
    return [themeTitles];
  } else if (Array.isArray(themeTitles)) {
    return themeTitles.map((title) => (typeof title === 'string' ? title : ''));
  } else if (typeof themeTitles === 'object' && themeTitles !== null) {
    return Object.values(themeTitles).map((title) =>
      typeof title === 'string' ? title : '',
    );
  } else {
    return [];
  }
};

export const isKnown = (value: React.ReactNode) =>
  value ?? DEFAULT_TEXT.UNKNOWN;

export const formatDimensions = (
  dimensions: string | undefined,
): JSX.Element[] => {
  if (!dimensions) return [];

  return dimensions.split(';').map((part, index) => {
    const [title, value] = part.split(':');
    return value ? (
      <React.Fragment key={index}>
        <span className="StyledText--bold">{title?.trim()}:</span>{' '}
        {value?.trim()}
        {index < dimensions.split(';').length - 1 && '; '}
      </React.Fragment>
    ) : (
      <React.Fragment key={index}>{title?.trim()}</React.Fragment>
    );
  });
};
