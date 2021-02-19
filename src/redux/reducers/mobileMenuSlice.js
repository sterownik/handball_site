import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "showMobileMenu",
  initialState: {
    value: false,
  },
  reducers: {
    changeFlag: state => {
      state.value = !state.value;
    }
  }
});

export const { changeFlag } = slice.actions;
export const selectFlag = state => state.showMobileMenu.value;
export default slice.reducer;

