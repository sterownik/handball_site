import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./reducers/contactSlice";
import navigationSlice from "./reducers/navigationSlice";
import mobileMenuReducer from "./reducers/mobileMenuSlice";
import sliderPhotosSlice from "./reducers/sliderPhotosSlice";
import activitiesSlice from "./reducers/activitiesSlice";

export default configureStore({
    reducer: {
        contact: contactSlice,
        navigation: navigationSlice,
        showMobileMenu: mobileMenuReducer,
        slideshow: sliderPhotosSlice,
        activities: activitiesSlice
    }
});