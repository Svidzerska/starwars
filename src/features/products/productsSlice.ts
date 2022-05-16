import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { products } from "../../api/products";
import { Entities } from "../../components/interfaces/Entities";

interface InitialState {
  people: Entities;
  starships: Entities;
  entity: any;
  isBlockViewServer: boolean;
}

const initialState: InitialState = {
  people: {},
  starships: {},
  entity: {},
  isBlockViewServer: true,
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

export const setView = createAsyncThunk<void, boolean>("view/setView", async (isBlockView: boolean) => {
  return products.setView(isBlockView);
});

export const getView = createAsyncThunk<boolean>("view/getView", async () => {
  return products.getView()?.then((data: boolean) => {
    return data; //payload - data
  }) as Promise<boolean>;
});

export const productsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // setUrlDetails: (state: InitialState, action: PayloadAction<string>) => {
    //   state.urlDetails = action.payload;
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

    builder.addCase(getEntity.fulfilled, (state, action) => {
      state.entity = action.payload;
    });
    builder.addCase(getEntity.pending, (_state, _action) => {
      console.log("pending");
    });
    builder.addCase(getEntity.rejected, (_state, _action) => {
      console.log("rejected");
    });

    builder.addCase(getView.fulfilled, (state, action) => {
      state.isBlockViewServer = action.payload;
    });
    builder.addCase(getView.pending, (_state, _action) => {
      console.log("pending");
    });
    builder.addCase(getView.rejected, (_state, _action) => {
      console.log("rejected");
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
