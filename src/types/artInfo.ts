import { UnionType } from '@custom-types/unionType';

export interface ArtInfo {
  id: number | string;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  date_start: number;
  date_end: number;
  place_of_origin: string;
  dimensions: string;
  credit_line: string;
  image_id: string;
  theme_titles:
    | string
    | Record<string, UnionType>
    | Array<string | Record<string, UnionType>>;
}
