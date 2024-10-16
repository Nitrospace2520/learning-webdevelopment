import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // users: await fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((data) => data),
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "nejkupduh@ij.a",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "kijeb@ebza.li",
    },
    {
      id: 3,
      name: "Jim Doe",
      email: "sufpeb@epe.th",
    },
    {
      id: 4,
      name: "Jill Doe",
      email: "ozneteb@tuzho.va",
    },
    {
      id: 5,
      name: "Jack Doe",
      email: "wuj@hagviwepa.fm",
    },
  ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const id = state.users[state.users.length - 1].id + 1 || 1;
      state.users.push({ ...action.payload, id });
    },
    getAllUsers: (state) => {
      return state.users;
    },
    getUser: (state, action) => {
      return state.users.find((user) => user.id === action.payload);
    },
  },
});
export const selectAllUsers = (state) => state.users.users;
export const { addUser, getAllUsers, getUser } = usersSlice.actions;
export default usersSlice.reducer;
