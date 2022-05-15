import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { products } from "../../api/products";
import { Entities } from "../../components/interfaces/Entities";

interface InitialState {
  people: Entities;
  starships: Entities;
}

const initialState: InitialState = {
  people: {},
  starships: {},
};

export const getPeople = createAsyncThunk<Entities>("people/getPeople", async () => {
  return products.getPeople()?.then((data: Entities) => {
    return data; //payload - data
  }) as Promise<Entities>;
});

export const getStarships = createAsyncThunk<Entities>("starships/getStarships", async () => {
  return products.getStarships()?.then((data: Entities) => {
    return data; //payload - data
  }) as Promise<Entities>;
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
    builder.addCase(getPeople.pending, (state, _action) => {
      state.people = { count: "Loarding..." };
      console.log("pending");
    });
    builder.addCase(getPeople.rejected, (_state, _action) => {
      console.log("rejected");
    });

    builder.addCase(getStarships.fulfilled, (state, action) => {
      state.starships = action.payload;
    });
    builder.addCase(getStarships.pending, (state, _action) => {
      state.starships = { count: "Loarding..." };
      console.log("pending");
    });
    builder.addCase(getStarships.rejected, (_state, _action) => {
      console.log("rejected");
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
