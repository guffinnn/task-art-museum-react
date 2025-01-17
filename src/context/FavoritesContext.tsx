import { ERROR } from '@constants/errors';
import { ArtInfo } from '@custom-types/artInfo';
import {
  getSavedFavorites,
  saveFavorites,
  updateFavorites,
} from '@helpers/favoritesHelpers';
import {
  createContext,
  JSX,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface FavoritesContextProps {
  favorites: ArtInfo[];
  toggleFavorite: (item: ArtInfo) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined,
);

export function useFavorites(): FavoritesContextProps {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(ERROR.NO_FAVORITES_PROVIDER);
  }
  return context;
}

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [favorites, setFavorites] = useState<ArtInfo[]>(getSavedFavorites);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (item: ArtInfo) => {
    const updatedFavorites = updateFavorites(favorites, item);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
