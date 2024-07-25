import {
  createContext,
  JSX,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ArtInfo } from '../constants/api';

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
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [favorites, setFavorites] = useState<ArtInfo[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item: ArtInfo) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === item.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== item.id);
      } else {
        return [...prevFavorites, item];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
