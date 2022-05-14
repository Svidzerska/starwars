import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";

import { User } from "../components/interfaces/User";

import { formAction } from "../api/formActions";

interface InitialState {
  users: User[];
}

interface Data {}

const initialState: InitialState = {
  users: [],
};

export const signup = createAsyncThunk<Data, User[]>("signup/setSignup", async (users: User[]) => {
  return formAction.signup(users);
});

export const usersInfoSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state: InitialState, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getCategories.fulfilled, (state, action) => {
  //     state.categoriesArray = action.payload;
  //   });
  //   builder.addCase(getCategories.pending, (_state) => {
  //     console.log("pending");
  //   });
  //   builder.addCase(getCategories.rejected, (_state) => {
  //     console.log("rejected");
  //   });
  // },
});

export const { setUsers } = usersInfoSlice.actions;

export default usersInfoSlice.reducer;
