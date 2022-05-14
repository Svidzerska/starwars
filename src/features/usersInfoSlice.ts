import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../components/interfaces/User";

import { formAction } from "../api/formActions";

interface InitialState {
  users: User[];
  isSignupSubmit: boolean;
  usersFromStorage: object;
  isAuthed: boolean;
}

interface Data {
  data: User[];
}

const initialState: InitialState = {
  users: [],
  isSignupSubmit: false,
  usersFromStorage: [],
  isAuthed: false,
};

export const signup = createAsyncThunk<void, User[]>("signup/setSignup", async (users: User[]) => {
  return formAction.signup(users);
});

export const getUsers = createAsyncThunk<Data>("users/getUsers", async () => {
  return formAction.getUsers()?.then((data: Data) => {
    return data; //payload - data
  }) as Promise<Data>;
});

export const usersInfoSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state: InitialState, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setSignupSubmit: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isSignupSubmit = action.payload;
    },
    setAuthed: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isAuthed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.usersFromStorage = action.payload;
    });
    builder.addCase(getUsers.pending, (_state, _action) => {
      console.log("pending");
    });
    builder.addCase(getUsers.rejected, (_state, _action) => {
      console.log("rejected");
    });
  },
});

export const { setUsers, setSignupSubmit, setAuthed } = usersInfoSlice.actions;

export default usersInfoSlice.reducer;
