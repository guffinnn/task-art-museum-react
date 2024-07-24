import { JSX } from 'react';
import './SmallCard.css';

interface SmallCardProps {
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  children: JSX.Element;
}

function SmallCard({
  title,
  artist_title,
  is_public_domain,
  children,
}: SmallCardProps): JSX.Element {
  return (
    <div className="card__description">
      {children}
      <p className="text--heading">{title ?? 'Unknown'}</p>
      <p className="text--subheading">{artist_title ?? 'Unknown'}</p>
      <p className="text--status">{is_public_domain ? 'Public' : 'Private'}</p>
      <div className="button"></div>
    </div>
  );
}

export default SmallCard;
