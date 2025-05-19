import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPhrases = createAsyncThunk('phrases/fetch', async (search = '') => {
  const res = await axios.get(`${API_URL}/phrases?search=${search}`);
  return res.data;
});

export const addPhrase = createAsyncThunk('phrases/add', async (phrase) => {
  const res = await axios.post(`${API_URL}/phrases`, phrase);
  return res.data;
});

export const deletePhrase = createAsyncThunk('phrases/delete', async (id) => {
  await axios.delete(`${API_URL}/phrases/${id}`);
  return id;
});

export const markLearned = createAsyncThunk('phrases/learned', async (id) => {
  const res = await axios.put(`${API_URL}/phrases/${id}`);
  return res.data;
});

const phrasesSlice = createSlice({
  name: 'phrases',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhrases.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addPhrase.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deletePhrase.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      })
      .addCase(markLearned.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      });
  }
});

export default phrasesSlice.reducer;
