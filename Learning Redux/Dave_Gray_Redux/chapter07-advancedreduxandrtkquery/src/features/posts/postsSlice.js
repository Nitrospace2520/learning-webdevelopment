/* eslint-disable no-unused-vars */
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { apiSlice } from "../api/apiSlice";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (response) => {
        let min = 1;
        const loadedPosts = response.map((post) => {
          // note: if the date is not provided not present in jsonplaceholder, we will generate a date for the post
          if (!post?.date) {
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
          }
          if (!post?.reactions) {
            post.reactions = {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            };
          }
          return post;
        });
        return postsAdapter.setAll(initialState, loadedPosts);
      },
    }),
    provideTags: (result, error, arg) => [
      { type: "Posts", id: "LIST" },
      ...result.ids.map((id) => ({ type: "Posts", id })),
    ],
  }),
});

export const { useGetPostsQuery } = extendedApiSlice;

// note: return the result of the getPosts query
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();

// note: creates memoized selector that returns the posts state
export const selectPostsData = createSelector(
  selectPostsResult,
  (postResult) => postResult.data
);

// note: postsAdapter.getSelectors() returns an object with selectors for the posts state and then we are renaming it
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(
  (state) => selectPostsData(state) || initialState
);
