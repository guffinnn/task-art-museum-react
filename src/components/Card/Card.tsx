import { CardContainer, CardImage } from '@components/Card/styled';
import SmallCard from '@components/SmallCard/SmallCard';
import { ImageLink } from '@components/SmallCard/styled';
import { ArtInfo, URL_IMAGE } from '@constants/api';
import { JSX } from 'react';

interface CardProps {
  item: ArtInfo;
}

function Card({ item }: CardProps): JSX.Element {
  return (
    <CardContainer>
      <ImageLink to={`/task-art-museum-react/art/${item.id}`}>
        <CardImage image_url={URL_IMAGE({ imageId: item.image_id })} />
      </ImageLink>
      <SmallCard item={item} isChild={'true'}>
        <></>
      </SmallCard>
    </CardContainer>
  );
}

export default Card;
