import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // All the reducer

    // Reset To initial state

    reset: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },

    // Login Reducers
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Register Reducers
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Logout
    logoutSuccess: (state) => {
      (state.currentUser = null),
        (state.isFetching = false),
        (state.error = false);
    },
  },
});

export const {
  reset,
  loginStart,
  loginSuccess,
  loginFail,
  registerStart,
  registerSuccess,
  registerFail,
} = authSlice.actions;
export default authSlice.reducer;
