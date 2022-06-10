import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  cardsQuery,
  createCardQuery,
  loginQuery,
  registerQuery,
} from '../queries';
import {Card} from './foodSlice';

export const loginAction = createAsyncThunk(
  '/loginAction',
  async (email: string) => {
    try {
      const {accessToken, refreshToken} = await registerQuery({
        name: 'test',
        email: email,
      });
      return {accessToken, refreshToken};
    } catch (e) {
      const {accessToken, refreshToken} = await loginQuery(email);
      return {accessToken, refreshToken};
    }
  },
);

export const cardsAction = createAsyncThunk('/cardsAction', async () => {
  const cards = await cardsQuery();
  return cards;
});

export const createCardAction = createAsyncThunk(
  '/createCardAction',
  async (name: string) => {
    const card = await createCardQuery(name);
    return card;
  },
);

export const showCardAction = createAsyncThunk(
  '/showCardAction',
  async ({card, py}: {card: Card; py: number}) => {
    return {card, py};
  },
);
