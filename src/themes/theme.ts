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
        // Customize Chakra UI components as needed
        // For example:
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
      // Include the GROWW logo in the assets folder and refer to it here
      // Replace '/path/to/groww-logo.png' with the actual path to the logo
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
        background: 'hsl(240, 5.9%, 10%)', // Inverted background color
        foreground: 'hsl(0, 0%, 98%)', // Inverted foreground color
        primary: 'hsl(0, 0%, 100%)', // Inverted primary color
        primaryForeground: 'hsl(240, 10%, 3.9%)', // Inverted primaryForeground color
        subHeading: 'gray.500'
      },
      components: {
        // Customize Chakra UI components as needed
        // For example:
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
  