import { ArtInfo } from '@custom-types/artInfo';

export const getClassName = (baseClass: string, isChild: boolean): string => {
  return isChild ? `${baseClass} --separated` : baseClass;
};

export const getText = (
  text: string | undefined,
  defaultText: string,
): string => {
  return text ?? defaultText;
};

export const handleToggleFavorite = (
  item: ArtInfo,
  toggleFavorite: (item: ArtInfo) => void,
) => {
  toggleFavorite(item);
};
