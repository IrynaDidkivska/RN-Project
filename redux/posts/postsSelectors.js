import { createSelector } from "@reduxjs/toolkit";
import { selectUserID } from "../auth/authSelectors";

export const selectPosts = (state) => state.posts;

export const selectPostsByOwner = createSelector(
  [selectPosts, selectUserID],
  (posts, uid) => {
    return posts.filter((post) => post.authorID === uid);
  }
);

export const selectPostByID = (id) => (state) => {
  return state.posts.find((postItem) => postItem.id === id);
};
