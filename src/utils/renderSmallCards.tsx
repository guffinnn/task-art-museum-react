import { urlImage } from '@api/images';
import SmallCard from '@components/SmallCard/SmallCard';
import { CardImageSmall } from '@components/SmallCardList/styled';
import { ArtInfo } from '@custom-types/artInfo';
import { JSX } from 'react';

export const renderSmallCards = (items: ArtInfo[]): JSX.Element[] => {
  return items.map((item, index) => (
    <SmallCard key={index} item={item}>
      <CardImageSmall imageUrl={urlImage({ imageId: item.imageId })} />
    </SmallCard>
  ));
};
