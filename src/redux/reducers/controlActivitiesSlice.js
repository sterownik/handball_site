import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "controlActivity",
    initialState: {
        value: null,
    },
    reducers: {
        setActivity: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setActivity } = slice.actions;
export const controlActivityData = state => state.controlActivity.value;
export default slice.reducer;