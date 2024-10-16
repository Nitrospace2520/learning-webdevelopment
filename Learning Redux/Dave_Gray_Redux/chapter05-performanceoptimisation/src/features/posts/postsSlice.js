/* eslint-disable no-unused-vars */
import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";
const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
  count: 0,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_API_URL);
  // console.log("fetchPosts response: ", response.data);
  return response.data;
});
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    const response = await axios.post(POST_API_URL, initialPost);
    console.log("addNewPost response: ", response.data);
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
    reactionsAdded: (state, action) => {
      const { postID, reaction } = action.payload;
      const post = state.entities[postID];
      if (post) {
        post.reactions[reaction]++;
      }
    },
    increaseCount: (state, action) => {
      state.count += 1;
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
        state.count = loadedPosts.length;
        postsAdapter.addMany(state, loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // console.log("addNewPost.fulfilled: ", state);
        action.payload.id =
          state.ids.length > 0 ? state.ids[state.ids.length - 1] + 1 : 1;
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        };
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Error deleting post: ", action.payload);
          return;
        }
        const { id } = action.payload;
        postsAdapter.removeOne(state, id);
      });
  },
});

// note: postsAdapter.getSelectors() returns an object with selectors for the posts state and then we are renaming it
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getPostCount = (state) => state.posts.count;

// note: createSelector is a memoized selector that only recalculates when the inputs change
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export const { reactionsAdded, increaseCount } = postsSlice.actions;
export default postsSlice.reducer;
