// src/redux/pageSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase/firebase';

export const fetchPageTitle = createAsyncThunk('page/fetchPageTitle', async () => {
  const doc = await db.collection('settings').doc('pageTitle').get();
  if (doc.exists) {
    return doc.data().title;
  } else {
    throw new Error('Page title document does not exist');
  }
});

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    title: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageTitle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPageTitle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.title = action.payload;
      })
      .addCase(fetchPageTitle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pageSlice.reducer;
