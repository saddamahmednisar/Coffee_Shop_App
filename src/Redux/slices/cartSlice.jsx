// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Convert price to a number to avoid issues with .toFixed()
        state.items.push({ ...item, quantity: 1, price: Number(item.price) });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== itemId);
        }
      }
    },
    removeAllOfItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((i) => i.id !== itemId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeAllOfItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
