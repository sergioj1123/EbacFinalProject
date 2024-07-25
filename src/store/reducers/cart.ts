import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../pages/Home/Home';

type CartState = {
  items: Restaurant[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Restaurant>) {
      const food = state.items.find((item) => item.id === action.payload.id);
      if (!food) {
        state.items.push(action.payload);
      } else {
        alert('Item já adicionado ao carrinho');
      }
    },
    remove(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, remove, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
