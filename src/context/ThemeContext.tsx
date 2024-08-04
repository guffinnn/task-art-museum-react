import { ERROR } from '@constants/errors';
import { theme, ThemeType } from '@styles/theme';
import React, { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface ThemeContextProps {
  theme: ThemeType;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(ERROR.NO_THEME_PROVIDER);
  }
  return context;
};
