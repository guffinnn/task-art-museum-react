import { ArtInfo } from '@custom-types/artInfo';

export interface HandleLoadingStateParams {
  loading: boolean;
  searchResults: ArtInfo[];
  setLoading: (loading: boolean) => void;
}
