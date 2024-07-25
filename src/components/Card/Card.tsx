import { JSX } from 'react';
import './Card.css';
import { CardImage } from './styled';
import { ArtInfo, URL_IMAGE } from '../../constants/api';
import SmallCard from '../SmallCard/SmallCard';

interface CardProps {
  item: ArtInfo;
}

function Card({ item }: CardProps): JSX.Element {
  return (
    <div className="card card--primary">
      <CardImage image_url={URL_IMAGE({ imageId: item.image_id })} />
      <SmallCard item={item}>
        <></>
      </SmallCard>
    </div>
  );
}

export default Card;
