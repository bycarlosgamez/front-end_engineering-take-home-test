import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchIndividualPost = createAsyncThunk(
  'individualPost/fetch',
  async (id) => {
    const response = await axios.get(`http://localhost:1969/posts/${id}`);

    return response.data;
  }
);

export { fetchIndividualPost };
