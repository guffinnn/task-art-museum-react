import { JSX } from 'react';
import './SmallCard.css';
import { useFavorites } from '../../context/FavoritesContext';
import { ArtInfo } from '../../constants/api';

interface SmallCardProps {
  item: ArtInfo;
  children: JSX.Element;
}

function SmallCard({ item, children }: SmallCardProps): JSX.Element {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === item.id);

  return (
    <div className="card__description">
      {children}
      <p className="text--heading">{item.title ?? 'Unknown'}</p>
      <p className="text--subheading">{item.artist_title ?? 'Unknown'}</p>
      <p className="text--status">
        {item.is_public_domain ? 'Public' : 'Private'}
      </p>
      <div
        className={`button ${isFavorite && '--favorite'}`}
        onClick={() => toggleFavorite(item)}
      ></div>
    </div>
  );
}

export default SmallCard;
