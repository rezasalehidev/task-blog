"use client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
        typography: {
            h1: {
                color: darkMode ? '#FFFFFF' : '#000000',
                fontSize: '1.5rem',
                fontWeight: 700,
            },
            h6: {
                color: darkMode ? '#bc5899' : '#bc5899',
                fontWeight: 700,
                fontSize: 28
            },
            body1: {
                color: darkMode ? '#FFFFFF' : '#000000',
            },
            body2: {
                color: darkMode ? '#FFFFFF' : '#374151',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeWrapper;
