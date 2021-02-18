import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "contact",

    initialState: {
        value: {
            email: "w.golda996@gmail.com",
            telephone: "+48 731604761",
            address: "Rzeszów, ul. Przykładowa 1",
        }
    }
});

export const contactData = state => state.contact.value;
export default slice.reducer;