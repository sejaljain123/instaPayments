// themes.js
import { FaMoon, FaSun } from 'react-icons/fa';

const themes: { [key: string]: any }  = {
    brand1: {
      fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Montserrat, sans-serif',
      },
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(240, 10%, 3.9%)',
        primary: 'hsl(240, 5.9%, 10%)',
        primaryForeground: 'hsl(0, 0%, 98%)',
        subHeading: 'gray.500'
      },
      components: {
        Button: {
          baseStyle: {
            fontWeight: 'bold',
            borderRadius: 'md',
          },
          variants: {
            solid: {
              bg: 'primary',
              color: 'primaryForeground',
              _hover: {
                bg: 'primary.500',
              },
            },
            outline: {
              bg: 'transparent',
              color: 'primary',
              border: '1px solid',
              borderColor: 'primary',
              _hover: {
                bg: 'gray.100',
              },
            },
          },
        },
      },
      icons: {
        logo: 'https://groww.in/groww-logo-270.png',
        themeSwitcher: FaMoon,
      },
    },
    brand2: {
      fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Montserrat, sans-serif',
      },
      colors: {
        background: 'hsl(240, 5.9%, 10%)',
        foreground: 'hsl(0, 0%, 98%)', 
        primary: 'hsl(0, 0%, 100%)',
        primaryForeground: 'hsl(240, 10%, 3.9%)', 
        subHeading: 'gray.500'
      },
      components: {
        Button: {
          baseStyle: {
            fontWeight: 'bold',
            borderRadius: 'md',
          },
          variants: {
            solid: {
              bg: 'primary',
              color: 'primaryForeground',
              _hover: {
                bg: 'primary.500',
              },
            },
            outline: {
              bg: 'transparent',
              color: 'primary',
              border: '1px solid',
              borderColor: 'primary',
              _hover: {
                bg: 'gray.800',
              },
            },
          },
        },
      },
      // Include the inverted GROWW logo in the assets folder and refer to it here
      // Replace '/path/to/inverted-groww-logo.png' with the actual path to the inverted logo
      icons: {
        logo: 'https://groww.in/groww-logo-270.png',
        themeSwitcher: FaSun,
      },
    },
    // Add configurations for other brands
  };
  
  export default themes;
  