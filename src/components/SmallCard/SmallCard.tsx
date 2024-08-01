import {
  CardDescription,
  ImageLink,
  TextHeading,
  TextStatus,
  TextSubheading,
} from '@components/SmallCard/styled';
import { ArtInfo } from '@constants/api';
import { useFavorites } from '@context/FavoritesContext';
import { CardButton } from '@styles/global';
import { JSX } from 'react';

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
      <ImageLink to={`/task-art-museum-react/art/${item.id}`}>
        {children}
      </ImageLink>
      <TextHeading isChild={isChild}>{item.title ?? 'Unknown'}</TextHeading>
      <TextSubheading isChild={isChild}>
        {item.artist_title ?? 'Unknown'}
      </TextSubheading>
      <TextStatus isChild={isChild}>
        {item.is_public_domain ? 'Public' : 'Private'}
      </TextStatus>
      <CardButton
        data-testid="fav-button"
        className={isFavorite ? '--favorite' : ''}
        isChild={isChild}
        onClick={() => toggleFavorite(item)}
      ></CardButton>
    </CardDescription>
  );
}

export default SmallCard;
