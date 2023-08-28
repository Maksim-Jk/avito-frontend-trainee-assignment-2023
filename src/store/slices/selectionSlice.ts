import { createSlice } from '@reduxjs/toolkit';

const selectionSlice = createSlice({
  name: 'selection',
  initialState: {
    platform: '',
    category: '',
    sortBy: '',
  },
  reducers: {
    setPlatform: (state, action) => {
      state.platform = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setPlatform, setCategory, setSortBy } = selectionSlice.actions;
export default selectionSlice;