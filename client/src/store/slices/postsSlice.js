import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../thunks/fetchPosts';

const initialState = {
  data: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const postsReducer = postsSlice.reducer;
