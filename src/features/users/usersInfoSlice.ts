import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../components/interfaces/User";

import { formAction } from "../../api/formActions";

interface InitialState {
  users: User[];
  isSignupSubmit: boolean;
  usersFromStorage: object;
  isAuthed: boolean;
  currentUser: User | undefined | string;
  logoutMessage: string;
}

interface Data {
  data: User[];
}

const initialState: InitialState = {
  users: [],
  isSignupSubmit: false,
  usersFromStorage: [],
  isAuthed: false,
  currentUser: "wait",
  logoutMessage: "",
};

export const signup = createAsyncThunk<void, User[]>("signup/setSignup", async (users: User[]) => {
  return formAction.signup(users);
});

export const getUsers = createAsyncThunk<Data>("users/getUsers", async () => {
  return formAction.getUsers()?.then((data: Data) => {
    return data; //payload - data
  }) as Promise<Data>;
});

export const signin = createAsyncThunk<void, User>("signin/setSignin", async (currentUser: User) => {
  return formAction.signin(currentUser);
});

export const getCurrentUser = createAsyncThunk<User>("currentUser/getCurrentUser", async () => {
  return formAction.checkLogin()?.then((data: User) => {
    return data; //payload - data
  }) as Promise<User>;
});

export const logout = createAsyncThunk<string>("logout/setLogout", async () => {
  return formAction.logout()?.then((data: string) => {
    return data; //payload - data
  }) as Promise<string>;
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

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(getCurrentUser.pending, (state, _action) => {
      state.currentUser = "wait";
      console.log("pending");
    });
    builder.addCase(getCurrentUser.rejected, (_state, _action) => {
      console.log("rejected");
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.logoutMessage = action.payload;
    });
    builder.addCase(logout.pending, (state, _action) => {
      state.logoutMessage = "logout in progress...";
      console.log("pending");
    });
    builder.addCase(logout.rejected, (_state, _action) => {
      console.log("rejected");
    });
  },
});

export const { setUsers, setSignupSubmit, setAuthed } = usersInfoSlice.actions;

export default usersInfoSlice.reducer;
