import { fetchData } from '@api/fetchData';
import { urlSearch } from '@api/urls';
import { ApiResponse } from '@custom-types/apiResponse';
import { toCamelCase } from '@utils/camelCase';

export const searchArtworks = async (
  searchTerm: string,
): Promise<ApiResponse> => {
  const data = await fetchData<ApiResponse>({ url: urlSearch({ searchTerm }) });
  return toCamelCase(data);
};
