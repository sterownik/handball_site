import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "navigation",

    initialState: {
        value: [
            {
                id: 0,
                title: "Aktualności",
                submenu: [],
                path: "/"
            },
            {
                id: 1,
                title: "Kluby",
                submenu: [],
                path: "/clubs",
            },
            {
                id: 2,
                title: "Sędziowie",
                path: "/referees",
                submenu: [
                    {
                        id: 10,
                        title: "Komisja ZPRP",
                        path: "/board"
                    },
                    {
                        id: 11,
                        title: "Komisja Podkarpackie WZPR",
                        path: "/boardvoivo"
                    },
                    {
                        id: 12,
                        title: "Lista sędziów",
                        path: "/referees"
                    },
                ]
            },
            {
                id: 3,
                title: "Przepisy",
                path: "/rules",
                submenu: [
                    {
                        id: 20,
                        title: "Przepisy",
                        path: "/rules"
                    },
                    {
                        id: 21,
                        title: "Stawki",
                        path: "/field",
                    }
                ]
            }
        ]
    }
});

export const navigationData = state => state.navigation.value;
export default slice.reducer;