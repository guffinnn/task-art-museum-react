import { JSX } from 'react';
import './Card.css';
import { CardImage } from './styled';
import SmallCard from '../SmallCard/SmallCard';

interface CardProps {
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  image_url: string;
}

function Card({
  title,
  artist_title,
  is_public_domain,
  image_url,
}: CardProps): JSX.Element {
  return (
    <div className="card card--primary">
      <CardImage image_url={image_url} />
      <SmallCard
        title={title}
        artist_title={artist_title}
        is_public_domain={is_public_domain}
      >
        <></>
      </SmallCard>
    </div>
  );
}

export default Card;
