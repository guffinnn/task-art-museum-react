import { JSX } from 'react';
import { Link } from 'react-router-dom';
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
      <Link
        to={`/task-art-museum-react/art/${item.id}`}
        className="image__link"
      >
        {children}
      </Link>
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
