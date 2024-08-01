import SmallCard from '@components/SmallCard/SmallCard';
import { ArtInfo, URL_IMAGE } from '@constants/api';
import { JSX } from 'react';
import { Link } from 'react-router-dom';

import { CardContainer, CardImage } from './styled';

interface CardProps {
  item: ArtInfo;
}

function Card({ item }: CardProps): JSX.Element {
  return (
    <CardContainer>
      <Link
        to={`/task-art-museum-react/art/${item.id}`}
        className="image__link"
      >
        <CardImage image_url={URL_IMAGE({ imageId: item.image_id })} />
      </Link>
      <SmallCard item={item} isChild={'true'}>
        <></>
      </SmallCard>
    </CardContainer>
  );
}

export default Card;
