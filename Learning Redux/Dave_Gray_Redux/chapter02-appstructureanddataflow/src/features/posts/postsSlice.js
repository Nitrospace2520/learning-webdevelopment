import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  // posts: await fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => data.posts),
  posts: [
    {
      id: 1,
      title: "Cynthia Alexander",
      author: "Troy Buchanan",
      content:
        "BhyqWQrThFWobG xQtt AgyNtKcAwK CjJjdgllkXaefhK fVUsrxSdF HRBNlNGZ aATAJMFuCqUKT LLIHbEpyVefi oBcJRgexlOUPriK",
      userID: 1,
      date: sub(new Date(), { minutes: 15 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
    {
      id: 2,
      title: "Sally Anderson",
      content: "CnalLqVIT rwcKSTPkX okIyuEYWwlqxc ivDTiGhCbKYo zjKPTuK",
      author: "Herbert Townsend",
      userID: 2,
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
    {
      id: 3,
      title: "David Lamb",
      author: "Cody Curtis",
      userID: 3,
      content:
        "gBIHlSkfBf OfUQWdQdoUbp jEaRcwfGAjgkyZ milpwRprRyJ MeYzZAD lBFxoVQLUG ZtVCxYEpm cuZgrPTgneeam gyYBYYHeAVkkrjrU yJ wFBtsHUtp goBtmadzB mqqwFOzsSnN jRHgUg LSNSNPxftwE",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    /* reducer: (state, action) => {
      state.push(action.payload);
    },
    prepare: (title, content, userID) => {
      return {
        payload: {
          title,
          content,
          userID,
        },
      };
    }, */
    addNewPost: (state, action) => {
      const id = state.posts[state.posts.length - 1].id + 1 || 1;
      state.posts.push({
        ...action.payload,
        id,
        date: new Date().toISOString(),
        reactions: {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
      });
      // console.log(state.posts);
    },
    getAllPosts: (state) => {
      return state.posts;
    },
    getPost: (state, action) => {
      return state.posts.find((post) => post.id === action.payload);
    },
    reactionsAdded: (state, action) => {
      const { postID, reaction } = action.payload;
      const post = state.posts.find((post) => post.id === postID);
      post.reactions[reaction]++;
      // console.log(post.reactions);
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const { reactionsAdded, addNewPost, getAllPosts, getPost } =
  postsSlice.actions;
export default postsSlice.reducer;
