import { UnionType } from '@custom-types/unionType';

export interface ArtInfo {
  id: number | string;
  title: string;
  artistTitle: string;
  isPublicDomain: boolean;
  dateStart: number;
  dateEnd: number;
  placeOfOrigin: string;
  dimensions: string;
  creditLine: string;
  imageId: string;
  themeTitles:
    | string
    | Record<string, UnionType>
    | Array<string | Record<string, UnionType>>;
}
