import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "slideshow",

    initialState: {
        value: [{
            id: 1,
            path: "./sliderPhotos/test1.jpg"
        },{
            id: 2,
            path: "./sliderPhotos/test2.jpg"
        },{
            id: 3,
            path: "./sliderPhotos/test3.jpg"
        },{
            id: 4,
            path: "./sliderPhotos/test5.jpg"
        }]
    }
});

export const sliderPhotosData = state => state.slideshow.value;
export default slice.reducer;
