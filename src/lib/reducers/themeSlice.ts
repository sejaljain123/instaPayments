import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the theme slice
const initialState = {
  currentTheme: 'brand1', // Default theme
  // Add other theme-related states here if needed
};

// Create the theme slice using createSlice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Define reducer to toggle between themes
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'brand1' ? 'brand2' : 'brand1';
      // Add logic for switching between other themes if needed
    },
    // Add other reducers for theme-related actions here
  },
});

// Export the slice reducer and action creators
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

// Optional: Export a selector function to access the current theme state
