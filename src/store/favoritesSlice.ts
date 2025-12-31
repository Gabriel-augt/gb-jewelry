import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoriteItem = {
  id: number;
  name: string;
  price: {
    priceBRL: number;
    priceUSD: number;
    priceEUR: number;
  };
  formatted: string;
  imageUrl: string;
};

type FavoritesState = {
  items: FavoriteItem[];
};

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<FavoriteItem>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
