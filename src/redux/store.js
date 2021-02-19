import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./reducers/contactSlice";
import navigationSlice from "./reducers/navigationSlice";
import mobileMenuReducer from "./reducers/mobileMenuSlice";

export default configureStore({
    reducer: {
        contact: contactSlice,
        navigation: navigationSlice,
        showMobileMenu: mobileMenuReducer
    }
});