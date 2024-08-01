import {
  CardButton,
  CardDescription,
  TextHeading,
  TextStatus,
  TextSubheading,
} from '@components/SmallCard/styled';
import { ArtInfo } from '@constants/api';
import { useFavorites } from '@context/FavoritesContext';
import { JSX } from 'react';
import { Link } from 'react-router-dom';

interface SmallCardProps {
  item: ArtInfo;
  isChild?: 'true' | 'false';
  children: JSX.Element;
}

function SmallCard({
  item,
  isChild = 'false',
  children,
}: SmallCardProps): JSX.Element {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === item.id);

  return (
    <CardDescription isChild={isChild}>
      <Link
        to={`/task-art-museum-react/art/${item.id}`}
        className="image__link"
      >
        {children}
      </Link>
      <TextHeading isChild={isChild}>{item.title ?? 'Unknown'}</TextHeading>
      <TextSubheading isChild={isChild}>
        {item.artist_title ?? 'Unknown'}
      </TextSubheading>
      <TextStatus isChild={isChild}>
        {item.is_public_domain ? 'Public' : 'Private'}
      </TextStatus>
      <CardButton
        data-testid="fav-button"
        isFavorite={isFavorite ? 'true' : 'false'}
        isChild={isChild}
        onClick={() => toggleFavorite(item)}
      ></CardButton>
    </CardDescription>
  );
}

export default SmallCard;
