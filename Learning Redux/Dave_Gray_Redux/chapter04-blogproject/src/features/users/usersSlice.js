import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_API_URL);
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, userId) => {
  console.log("userId : ", userId, " state.users : ", state.users);
  return state.users.find((user) => user.id === +userId);
};
export default usersSlice.reducer;
