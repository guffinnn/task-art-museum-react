import { getArtworkData } from '@api/artworks';
import { searchArtworks } from '@api/search';
import { ERROR } from '@constants/errors';
import { MESSAGES } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import React from 'react';

export const fetchSearchResults = async (
  searchTerm: string,
  setLoading: (loading: boolean) => void,
  setSearchResults: (results: ArtInfo[]) => void,
  requestCount: React.MutableRefObject<number>,
  setError: (error: string | null) => void,
) => {
  setLoading(true);
  requestCount.current += 1;
  console.log(MESSAGES.REQUEST, requestCount.current);

  try {
    const result = await searchArtworks(searchTerm);
    const artworks = result.data;

    const detailedArtworks = await Promise.all(
      artworks.map(async (artwork: { id: string }) => {
        return getArtworkData(artwork.id);
      }),
    );

    setSearchResults(detailedArtworks);
  } catch (error) {
    console.error(ERROR.INVALID_FETCH, error);
    setError(ERROR.INVALID_FETCH);
  } finally {
    setLoading(false);
  }
};
