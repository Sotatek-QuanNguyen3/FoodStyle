import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  cardsQuery,
  createCardQuery,
  deleteCardQuery,
  duplicateCardQuery,
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

export const deleteCardAction = createAsyncThunk(
  '/deleteCardAction',
  async (id: number) => {
    await deleteCardQuery(id);
    return id;
  },
);

export const duplicateCardAction = createAsyncThunk(
  '/duplicateCardAction',
  async (id: number) => {
    const card = await duplicateCardQuery(id);
    console.log(card);
    return card;
  },
);

export const showCardAction = createAsyncThunk(
  '/showCardAction',
  async ({card, py}: {card: Card; py: number}) => {
    return {card, py};
  },
);
