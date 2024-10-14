import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await axios.get('http://localhost:1969/posts');

  //   DEV ONLY
  await pause(3000);
  return response.data;
});

// DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchPosts };
