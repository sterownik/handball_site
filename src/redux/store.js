import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./reducers/contactSlice";
import navigationSlice from "./reducers/navigationSlice";

export default configureStore({
    reducer: {
        contact: contactSlice,
        navigation: navigationSlice,
    }
});