import { FavoritesProvider } from '@context/FavoritesContext';
import { ThemeProvider } from '@context/ThemeContext';
import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle theme={theme} />
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
