import defaultImage from '@assets/default.png';
import { UrlData } from '@custom-types/urlData';

export const urlImage = ({ imageId }: Partial<UrlData>) => {
  if (imageId === null) {
    return `${defaultImage}`;
  }
  return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
};
