import { JSX } from 'react';
import './Card.css';

interface CardProps {
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
    <div className="card">
      <div className="card__image"></div>
      <div className="card__description">
        <p className="text--heading">{title ?? 'Unknown'}</p>
        <p className="text--subheading">{artist_title ?? 'Unknown'}</p>
        <p className="text--status">
          {is_public_domain ? 'Public' : 'Private'}
        </p>
        <div className="button"></div>
      </div>
    </div>
  );
}

export default Card;
