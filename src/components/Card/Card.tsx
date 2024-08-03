import { urlImage } from '@api/images';
import { CardContainer, CardImage } from '@components/Card/styled';
import SmallCard from '@components/SmallCard/SmallCard';
import { ImageLink } from '@components/SmallCard/styled';
import { PATH } from '@constants/paths';
import { ArtInfo } from '@custom-types/artInfo';
import { JSX } from 'react';

interface CardProps {
  item: ArtInfo;
}

function Card({ item }: CardProps): JSX.Element {
  const imageUrl = urlImage({ imageId: item.imageId });

  return (
    <CardContainer>
      <ImageLink to={`${PATH.FROM_CARD_TO_ART}/${item.id}`}>
        <CardImage imageUrl={imageUrl} />
      </ImageLink>
      <SmallCard item={item} isChild={true} />
    </CardContainer>
  );
}

export default Card;
