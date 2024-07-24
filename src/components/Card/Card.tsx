import { JSX } from 'react';
import './Card.css';
import SmallCard from '../SmallCard/SmallCard';

export interface CardProps {
  title: string;
  artist_title: string;
  is_public_domain: boolean;
}

function Card({
  title,
  artist_title,
  is_public_domain,
}: CardProps): JSX.Element {
  return (
    <div className="card card--primary">
      <div className="card__image"></div>
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
