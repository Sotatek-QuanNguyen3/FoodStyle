import {createSlice} from '@reduxjs/toolkit';
import {
  cardsAction,
  createCardAction,
  loginAction,
  showCardAction,
} from './foodThunk';

export interface Card {
  id: string;
  name: string;
}
interface FoodStore {
  accessToken: string | null;
  refreshToken: string | null;
  cards: Card[];
  cardSelected: Card | null;
  py: number;
}

const initialState: FoodStore = {
  accessToken: null,
  refreshToken: null,
  cards: [],
  cardSelected: null,
  py: 0,
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    closeCard: state => {
      state.cardSelected = null;
      state.py = 0;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(createCardAction.fulfilled, (state, action) => {
      state.cards.push(action.payload);
    });
    builder.addCase(cardsAction.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
    builder.addCase(showCardAction.fulfilled, (state, action) => {
      state.cardSelected = action.payload.card;
      state.py = action.payload.py;
    });
  },
});

export const {closeCard} = foodSlice.actions;
