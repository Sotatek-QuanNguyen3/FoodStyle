import {createSlice} from '@reduxjs/toolkit';
import {loginAction} from './foodThunk';

interface FoodStore {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: FoodStore = {
  accessToken: null,
  refreshToken: null,
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
  },
});
