import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import postsReducer from "./postsReducer";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
