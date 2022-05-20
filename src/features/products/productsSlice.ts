import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { products } from "../../api/products";
import { Data } from "../../components/interfaces/Data";
import { Entities } from "../../components/interfaces/Entities";

interface InitialState {
  people: Data;
  starships: Data;
  entity: {
    data: any | null;
    isPending: boolean;
    error: string | null;
  };
  isBlockView: boolean;
}

const initialState: InitialState = {
  people: { data: null, isPending: false, error: null },
  starships: { data: null, isPending: false, error: null },
  entity: { data: null, isPending: false, error: null },
  isBlockView: true,
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

export const getEntity = createAsyncThunk<any, string>("entity/getEntity", async (url: string) => {
  return products.getEntity(url)?.then((data: any) => {
    return data; //payload - data
  }) as Promise<any>;
});

export const productsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setBlockView: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isBlockView = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.people.data = action.payload;
      state.people.isPending = false;
      state.people.error = null;
    });
    builder.addCase(getPeople.pending, (state, _action) => {
      state.people.data = null;
      state.people.isPending = true;
      state.people.error = null;
    });
    builder.addCase(getPeople.rejected, (state, _action) => {
      state.people.data = null;
      state.people.isPending = false;
      state.people.error = "Something was wrong...";
    });

    builder.addCase(getStarships.fulfilled, (state, action) => {
      state.starships.data = action.payload;
      state.starships.isPending = false;
      state.starships.error = null;
    });
    builder.addCase(getStarships.pending, (state, _action) => {
      state.starships.data = null;
      state.starships.isPending = true;
      state.starships.error = null;
    });
    builder.addCase(getStarships.rejected, (state, _action) => {
      state.starships.data = null;
      state.starships.isPending = false;
      state.starships.error = "Something was wrong...";
    });

    builder.addCase(getEntity.fulfilled, (state, action) => {
      state.entity.data = action.payload;
      state.entity.isPending = false;
      state.entity.error = null;
    });
    builder.addCase(getEntity.pending, (state, _action) => {
      state.entity.data = null;
      state.entity.isPending = true;
      state.entity.error = null;
    });
    builder.addCase(getEntity.rejected, (state, _action) => {
      state.entity.data = null;
      state.entity.isPending = false;
      state.entity.error = "Something was wrong...";
    });
  },
});

export const { setBlockView } = productsSlice.actions;

export default productsSlice.reducer;
