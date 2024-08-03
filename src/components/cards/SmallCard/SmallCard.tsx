import {
  CardDescription,
  ImageLink,
  TextHeading,
  TextStatus,
  TextSubheading,
} from '@components/cards/SmallCard/styled';
import { PATH } from '@constants/paths';
import { DEFAULT_TEXT } from '@constants/values';
import { useFavorites } from '@context/FavoritesContext';
import { ArtInfo } from '@custom-types/artInfo';
import {
  getClassName,
  getText,
  handleToggleFavorite,
} from '@helpers/smallCardHelpers';
import { CardButton } from '@styles/global';
import { JSX, memo, useCallback, useMemo } from 'react';

interface SmallCardProps {
  item: ArtInfo;
  isChild?: boolean;
  children?: JSX.Element;
}

function SmallCard({
  item,
  isChild = false,
  children,
}: SmallCardProps): JSX.Element {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = useMemo(
    () => favorites.some((fav) => fav.id === item.id),
    [favorites, item.id],
  );

  const handleFavoriteClick = useCallback(() => {
    handleToggleFavorite(item, toggleFavorite);
  }, [item, toggleFavorite]);

  return (
    <CardDescription className={getClassName('', isChild)}>
      <ImageLink to={`${PATH.FROM_CARD_TO_ART}/${item.id}`}>
        {children}
      </ImageLink>
      <TextHeading className={getClassName('', isChild)}>
        {getText(item.title, DEFAULT_TEXT.UNKNOWN)}
      </TextHeading>
      <TextSubheading className={getClassName('', isChild)}>
        {getText(item.artistTitle, DEFAULT_TEXT.UNKNOWN)}
      </TextSubheading>
      <TextStatus className={getClassName('', isChild)}>
        {item.isPublicDomain ? DEFAULT_TEXT.PUBLIC : DEFAULT_TEXT.PRIVATE}
      </TextStatus>
      <CardButton
        data-testid="fav-button"
        className={`${isFavorite ? '--favorite' : ''} ${getClassName('', isChild)}`}
        onClick={handleFavoriteClick}
      ></CardButton>
    </CardDescription>
  );
}

export default memo(SmallCard);
