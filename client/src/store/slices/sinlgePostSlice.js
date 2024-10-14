import { createSlice } from '@reduxjs/toolkit';
import { fetchIndividualPost } from '../thunks/fetchIndividualPost';

const initialState = {
  data: [],
};

const singlePostsSlice = createSlice({
  name: 'singlePost',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchIndividualPost.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const sinlgePostReducer = singlePostsSlice.reducer;
