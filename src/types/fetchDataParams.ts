import { ArtInfo } from '@custom-types/artInfo';

export interface FetchDataParams {
  setLoading: (loading: boolean) => void;
  setData: (data: ArtInfo[]) => void;
  setTotalPages?: (totalPages: number) => void;
  currentPage?: number;
}
