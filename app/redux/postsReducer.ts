import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    date: string;
}

interface PostsState {
    posts: Post[];
    post: Post | null;
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    post: null,
    loading: false,
    error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = response.data.map((post: any) => ({
        ...post,
        date: new Date(Date.now() - post.id * 86400000).toISOString().split("T")[0],
    }));
    return posts;
});

const postsReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "error";
            });
    },
});

export default postsReducer.reducer;
