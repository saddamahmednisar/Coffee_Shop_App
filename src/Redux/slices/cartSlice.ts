import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  favourite: boolean;
  quantity: number;
  selectedSize: string;
}

interface CartState {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

const TAX_AMOUNT = 40.00;

const initialState: CartState = {
  items: [],
  subtotal: 0,
  tax: TAX_AMOUNT,
  total: 0,
};

const calculateTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((acc, item) => acc + parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity, 0);
  const total = subtotal + TAX_AMOUNT;
  return { subtotal, tax: TAX_AMOUNT, total };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity || 1,
        };
        state.items.push(newItem);
      }
      const { subtotal, tax, total } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.tax = tax;
      state.total = total;
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
      const { subtotal, tax, total } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.tax = tax;
      state.total = total;
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = quantity;
      }
      const { subtotal, tax, total } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.tax = tax;
      state.total = total;
    },
    removeItemCompletely: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      const { subtotal, tax, total } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.tax = tax;
      state.total = total;
    },
  },
});

export const { addItem, removeItem, updateQuantity, removeItemCompletely } = cartSlice.actions;
export default cartSlice.reducer;
