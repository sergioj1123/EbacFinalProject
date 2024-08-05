import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food } from '../../components/FoodList';

type CartState = {
  items: Food[];
  cartIsOpen: boolean;
  orderIsOpen: boolean;
  paymentIsOpen: boolean;
  sucessIsOpen: boolean;
};

const initialState: CartState = {
  items: [],
  cartIsOpen: false,
  orderIsOpen: false,
  paymentIsOpen: false,
  sucessIsOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Food>) {
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
      state.cartIsOpen = true;
    },
    closeCart: (state) => {
      state.cartIsOpen = false;
    },
    openOrder: (state) => {
      state.orderIsOpen = true;
    },
    closeOrder: (state) => {
      state.orderIsOpen = false;
    },
    openPayment: (state) => {
      state.paymentIsOpen = true;
    },
    closePayment: (state) => {
      state.paymentIsOpen = false;
    },
    openSucess: (state) => {
      state.sucessIsOpen = true;
    },
    closeSucess: (state) => {
      state.sucessIsOpen = false;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const {
  add,
  remove,
  openCart,
  closeCart,
  openOrder,
  closeOrder,
  openPayment,
  closePayment,
  clear,
  openSucess,
  closeSucess,
} = cartSlice.actions;
export default cartSlice.reducer;
