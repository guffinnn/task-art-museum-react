import { getGlobalData } from '@api/artworks';
import { ERROR } from '@constants/errors';
import {
  DEFAULT_PAGES_LIMIT,
  VARYING_CURRENT_PAGE,
  VARYING_PAGES_LIMIT,
} from '@constants/values';
import { FetchDataParams } from '@custom-types/fetchDataParams';

export const fetchGlobalData = async ({
  setLoading,
  setData,
  setTotalPages,
  currentPage,
}: FetchDataParams) => {
  setLoading(true);

  try {
    let result = await getGlobalData(VARYING_CURRENT_PAGE, VARYING_PAGES_LIMIT);
    if (currentPage) {
      result = await getGlobalData(currentPage, DEFAULT_PAGES_LIMIT);
    }

    setData(result.data);
    if (setTotalPages) {
      setTotalPages(result.total);
    }
  } catch (error) {
    console.error(ERROR.INVALID_FETCH, error);
  } finally {
    setLoading(false);
  }
};
