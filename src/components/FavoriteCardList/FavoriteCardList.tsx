import { JSX, useEffect, useMemo, useState } from 'react';
import { CardImageSmall, CardListWrapper } from '../SmallCardList/styled';
import { Loader } from './styled';
import { URL_IMAGE } from '../../constants/api';
import { useFavorites } from '../../context/FavoritesContext';
import SmallCard from '../SmallCard/SmallCard';
import SortDropdown from '../SortDropdown/SortDropdown';

function FavoriteCardList(): JSX.Element {
  const { favorites } = useFavorites();
  const [storageIsEmpty, setStorageIsEmpty] = useState<boolean>(true);
  const [sortCriteria, setSortCriteria] = useState<string>('date');

  useEffect(() => {
    if (favorites.length > 0) {
      setStorageIsEmpty(false);
    } else {
      setStorageIsEmpty(true);
    }
  }, [favorites]);

  const sortedFavorites = useMemo(() => {
    return [...favorites].sort((a, b) => {
      switch (sortCriteria) {
        case 'date':
          return (
            new Date(a.date_end).getTime() - new Date(b.date_end).getTime()
          );
        case 'date_reverse':
          return (
            new Date(b.date_end).getTime() - new Date(a.date_end).getTime()
          );
        case 'alphabet':
          return a.title.localeCompare(b.title);
        case 'alphabet_reverse':
          return b.title.localeCompare(a.title);
      }
      return 0;
    });
  }, [favorites, sortCriteria]);

  return (
    <>
      {!storageIsEmpty ? (
        <>
          <SortDropdown
            sortCriteria={sortCriteria}
            setSortCriteria={setSortCriteria}
          />
          <CardListWrapper>
            {sortedFavorites.map((item, index) => (
              <SmallCard key={index} item={item}>
                <CardImageSmall
                  image_url={URL_IMAGE({ imageId: item.image_id })}
                />
              </SmallCard>
            ))}
          </CardListWrapper>
        </>
      ) : (
        <Loader>No favorites yet.</Loader>
      )}
    </>
  );
}

export default FavoriteCardList;
