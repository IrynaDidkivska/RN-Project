import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, addPost, addComment, addLike } from "./postsOperations";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],

  extraReducers: (builder) =>
    builder
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(addPost.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(addComment.fulfilled, (state, { payload }) => {
        const postIndex = state.findIndex((post) => post.id === payload.id);
        state[postIndex].comments.push(payload.comment);
      })
      .addCase(addLike.fulfilled, (state, { payload }) => {
        const postIndex = state.findIndex((post) => post.id === payload);
        state[postIndex].likes += 1;
      }),
});
export const postsReducer = postsSlice.reducer;
