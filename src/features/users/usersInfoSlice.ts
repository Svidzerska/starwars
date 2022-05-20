import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../components/interfaces/User";

interface InitialState {
  users: User[];
  currentUser: User | null;
  isSignupSubmit: boolean;
  isSubmitSuccess: boolean;
}

const initialState: InitialState = {
  users: [],
  currentUser: null,
  isSignupSubmit: false,
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
    setSignupSubmit: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isSignupSubmit = action.payload;
    },
    setSubmitSuccess: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isSubmitSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setUsers, setCurrentUser, setSignupSubmit, setSubmitSuccess } = usersInfoSlice.actions;

export default usersInfoSlice.reducer;
