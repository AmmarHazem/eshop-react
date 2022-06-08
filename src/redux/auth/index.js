import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: "",
  },
  reducers: {
    setLoginSuccessData: (state, { payload }) => {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      // debugger;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = "";
    },
  },
});

export const { setLoginSuccessData, logout } = authSlice.actions;

export default authSlice.reducer;
