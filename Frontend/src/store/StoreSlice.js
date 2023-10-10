import { createSlice } from "@reduxjs/toolkit";

const initialStoreState = {
  items: [],
  totalPrice: 0,
  changed: false,
};

const StoreSlice = createSlice({
  name: "store",
  initialState: initialStoreState,
  reducers: {
    replaceCart(state, action) {
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      // updating items
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.changed = true;

      if (existingCartItem) {
        existingCartItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      // updating totalPrice
      const updatedTotalPrice =
        state.totalPrice + action.payload.price * action.payload.quantity;

      state.totalPrice = updatedTotalPrice;
    },

    removeItem(state, action) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.changed = true;

      if (existingCartItem.quantity != 1) {
        existingCartItem.quantity--;
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }

      // updating totalPrice
      const updatedTotalPrice = state.totalPrice - existingCartItem.price;

      state.totalPrice = updatedTotalPrice;
    },
  },
});

export default StoreSlice;
