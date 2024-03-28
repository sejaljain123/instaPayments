import { createSlice } from '@reduxjs/toolkit';

const loadInitialState = () => {
    try {
      const serializedState = localStorage.getItem('themeState');
      if (serializedState === null) {
        return { currentTheme: 'brand1' }; 
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return { currentTheme: 'brand1' };
  };
};

const initialState = {
  currentTheme: loadInitialState().currentTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Define reducer to toggle between themes
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'brand1' ? 'brand2' : 'brand1';
      localStorage.setItem('themeState', JSON.stringify(state));
    },
  },
});

// Export the slice reducer and action creators
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

