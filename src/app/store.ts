import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import usersInfoReducer from "../features/usersInfoSlice";

export const store = configureStore({
  reducer: {
    users: usersInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
