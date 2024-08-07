import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    MenuState: true,
  },
  reducers: {
    toggleMenu: (state, payload) => {
      state.MenuState = !state.MenuState;
    },
    closeMenu: (state) => {
      state.MenuState = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
