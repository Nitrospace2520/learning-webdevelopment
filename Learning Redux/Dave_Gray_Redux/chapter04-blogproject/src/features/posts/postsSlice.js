/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const initialState = {
  posts: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};
const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_API_URL);
  return response.data;
});
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    const response = await axios.post(POST_API_URL, initialPost);
    return response.data;
  }
);
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (updatedPost) => {
    const response = await axios.patch(
      `${POST_API_URL}/${updatedPost.id}`,
      updatedPost
    );
    return response.data;
  }
);
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialPost) => {
    const { id } = initialPost;
    const response = await axios.delete(`${POST_API_URL}/${id}`);
    if (response.status === 200) return initialPost;
    else return `${response?.status} : ${response?.statusText}`;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    newPostAdded: {
      reducer(state, action) {
        const id = state.posts.length
          ? state.posts[state.posts.length - 1].id + 1
          : 1;
        state.posts.push({ ...action.payload, id });
        console.log(state.posts);
      },
      prepare({ title, body, userID }) {
        return {
          payload: {
            date: new Date().toISOString(),
            title,
            body,
            userId: Number(userID),
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        };
      },
    },
    reactionsAdded: (state, action) => {
      const { postID, reaction } = action.payload;
      const post = state.posts.find((post) => post.id === postID);
      post.reactions[reaction]++;
      // console.log(state.posts);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        let min = 1;
        let loadedPosts = action.payload.map((post) => {
          return {
            ...post,
            date: sub(new Date(), { minutes: min++ }).toISOString(),
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          };
        });
        // console.log(loadedPosts);
        state.posts = loadedPosts || state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.id =
          state.posts.length > 0
            ? state.posts[state.posts.length - 1].id + 1
            : 1;
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        };
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const { id, title, body, userID } = action.payload;
        const existingPost = state.posts.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.body = body;
          existingPost.userID = Number(userID);
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Error deleting post: ", action.payload);
          return;
        }
        const { id } = action.payload;
        state.posts = state.posts.filter((post) => post.id !== id);
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const selectPostById = (state, postId) => {
  return state.posts.posts.find((post) => post.id === postId);
};

export const { reactionsAdded, newPostAdded } = postsSlice.actions;
export default postsSlice.reducer;
