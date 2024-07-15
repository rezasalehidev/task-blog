import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    darkMode: boolean;
}

const initialState: ThemeState = {
    darkMode: false,
};

const themeReducer = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggleTheme } = themeReducer.actions;
export default themeReducer.reducer;
