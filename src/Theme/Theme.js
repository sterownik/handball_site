import React from "react";
import {ThemeProvider, Global, css} from "@emotion/react";
import { theme } from "./theme_";
import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";

const Theme = ({children}) => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Global styles={css`
                    body {
                        background-color: #85D397;
                        margin: 0;
                        font-family: sans-serif;
                    }
                `}
                />
                {children}
            </ThemeProvider>
        </MuiThemeProvider>
    )
};

export default Theme;