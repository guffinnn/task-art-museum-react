import { CardContainer, CardImage } from '@components/Card/styled';
import SmallCard from '@components/SmallCard/SmallCard';
import { ImageLink } from '@components/SmallCard/styled';
import { JSX } from 'react';
import { ArtInfo } from '@custom-types/artInfo';
import { urlImage } from '@utils/api/api';

interface CardProps {
  item: ArtInfo;
}

function Card({ item }: CardProps): JSX.Element {
  const imageUrl = urlImage({ imageId: item.imageId });

  return (
    <CardContainer>
      <ImageLink to={`/task-art-museum-react/art/${item.id}`}>
        <CardImage imageUrl={imageUrl} />
      </ImageLink>
      <SmallCard item={item} isChild={'true'}>
        <></>
      </SmallCard>
    </CardContainer>
  );
}

export default Card;
