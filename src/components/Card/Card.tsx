import './Card.css';

import { JSX } from 'react';
import { Link } from 'react-router-dom';

import { ArtInfo, URL_IMAGE } from '../../constants/api';
import SmallCard from '../SmallCard/SmallCard';
import { CardImage } from './styled';

interface CardProps {
  item: ArtInfo;
}

function Card({ item }: CardProps): JSX.Element {
  return (
    <div className="card card--primary">
      <Link
        to={`/task-art-museum-react/art/${item.id}`}
        className="image__link"
      >
        <CardImage image_url={URL_IMAGE({ imageId: item.image_id })} />
      </Link>
      <SmallCard item={item}>
        <></>
      </SmallCard>
    </div>
  );
}

export default Card;
