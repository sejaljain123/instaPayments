// ThemeContext.js

import React, { createContext, useState, useContext } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import themes from './theme'; // Import your themes

const ThemeContext = createContext({
  currentTheme: 'brand1',
  toggleTheme: () => { },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState('brand1');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'brand1' ? 'brand2' : 'brand1');
  };

  const theme = extendTheme(themes[currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
