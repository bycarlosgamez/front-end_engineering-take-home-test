import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/postsSlice';
import { sinlgePostReducer } from './slices/sinlgePostSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    singlePost: sinlgePostReducer,
  },
});

export * from './thunks/fetchPosts';
export * from './thunks/fetchIndividualPost';
