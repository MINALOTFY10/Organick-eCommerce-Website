import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = { showStore: false, showNotification: null };

const ToggleSlice = createSlice({
  name: "toggle",
  initialState: initialToggleState,
  reducers: {
    toggleCart(state) {
      state.showStore = !state.showStore;
    },
    showNotification(state, action) {
      state.showNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default ToggleSlice;
