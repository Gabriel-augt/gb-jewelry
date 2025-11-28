import { createSlice } from "@reduxjs/toolkit";

type Item = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  favorite: boolean;
  cart: boolean;
  quantity: number;
};

type InitialState = {
  selectedItems: Item[];
};

const initialState: InitialState = {
  selectedItems: [],
};

const selectedItemsSlice = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.selectedItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.selectedItems.push({ ...item, quantity: 1 });
      }
    },

    removeOne: (state, action) => {
      const id = action.payload;
      const item = state.selectedItems.find((i) => i.id === id);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.selectedItems = state.selectedItems.filter((i) => i.id !== id);
      }
    },

    deleteItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload
      );
    },

    resetItem: (state) => {
      state.selectedItems = [];
    },
  },
});

export const { addItem, removeOne, deleteItem, resetItem } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
