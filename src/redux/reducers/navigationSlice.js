import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "navigation",

    initialState: {
        value: [
            {
                id: 0,
                title: "Aktualności",
                submenu: []
            },
            {
                id: 1,
                title: "Kluby",
                submenu: []
            },
            {
                id: 2,
                title: "Sędziowie",
                submenu: [
                    {
                        id: 10,
                        title: "Komisja ZPRP"
                    },
                    {
                        id: 11,
                        title: "Komisja Podkarpackie WZPR"
                    },
                    {
                        id: 12,
                        title: "Lista sędziów"
                    },
                ]
            },
            {
                id: 3,
                title: "Przepisy",
                submenu: [
                    {
                        id: 20,
                        title: "Przepisy"
                    },
                    {
                        id: 21,
                        title: "Stawki"
                    }
                ]
            }
        ]
    }
});

export const navigationData = state => state.navigation.value;
export default slice.reducer;