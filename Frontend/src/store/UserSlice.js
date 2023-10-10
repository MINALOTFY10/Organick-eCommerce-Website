import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { userID: null, userEmail: null, userPassword: null };

const UserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    saveUserData(state, action) {
        state.userEmail = action.payload.email;
        state.userPassword = action.payload.password;
    },
  },
});

export default UserSlice;
