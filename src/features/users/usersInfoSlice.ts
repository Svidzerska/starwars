import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../components/interfaces/User";

interface InitialState {
  users: User[];
  currentUser: User | null;
  isUsersSent: boolean;
  isSubmitSuccess: boolean;
}

const initialState: InitialState = {
  users: [],
  currentUser: null,
  isUsersSent: false,
  isSubmitSuccess: false,
};

export const usersInfoSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state: InitialState, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setCurrentUser: (state: InitialState, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    setUsersSent: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isUsersSent = action.payload;
    },
    setSubmitSuccess: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isSubmitSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setUsers, setCurrentUser, setUsersSent, setSubmitSuccess } = usersInfoSlice.actions;

export default usersInfoSlice.reducer;
