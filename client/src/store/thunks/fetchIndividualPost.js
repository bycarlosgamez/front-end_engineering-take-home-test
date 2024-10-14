import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchIndividualPost = createAsyncThunk(
  'individualPost/fetch',
  async (id) => {
    const response = await axios.get(`http://localhost:1969/posts/${id}`);

    //   DEV ONLY
    await pause(3000);

    return response.data;
  }
);

// DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchIndividualPost };
