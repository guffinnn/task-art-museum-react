import React from 'react';
import ReactDOM from 'react-dom/client';
import { FavoritesProvider } from './context/FavoritesContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>,
);
