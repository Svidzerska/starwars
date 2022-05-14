import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { products } from "../../api/products";

interface InitialState {
  people: object;
}

interface Data {
  data: object;
}

const initialState: InitialState = {
  people: {},
};

export const getPeople = createAsyncThunk<Data>("people/getPeople", async () => {
  return products.getPeople()?.then((data: Data) => {
    return data; //payload - data
  }) as Promise<Data>;
});

export const productsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // setUsers: (state: InitialState, action: PayloadAction<User[]>) => {
    //   state.users = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.people = action.payload;
    });
    builder.addCase(getPeople.pending, (_state, _action) => {
      console.log("pending");
    });
    builder.addCase(getPeople.rejected, (_state, _action) => {
      console.log("rejected");
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
