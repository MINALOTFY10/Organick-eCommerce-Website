import { createSlice, configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import StoreSlice from "./StoreSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    toggle: ToggleSlice.reducer,
    store: StoreSlice.reducer,
    user: UserSlice.reducer,
  },
});

export const toggleActions = ToggleSlice.actions;
export const storeActions = StoreSlice.actions;
export const userActions = UserSlice.actions;

export default store;
