import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { ICatsWithCategory } from "./type";
import { getCats } from "./CatsThunk";

const initialState: ICatsWithCategory = {
  data: null,
  isLoading: false,
  isError: null,
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCats.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCats.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = null;

      if (state.data?.[payload.categoryId]) {
        state.data = {
          ...state.data,
          ...{
            [payload.categoryId]: [
              ...state.data?.[payload.categoryId],
              ...payload.data,
            ],
          },
        };
      } else {
        state.data = { ...state.data, [payload.categoryId]: payload.data };
      }
    });
    builder.addCase(getCats.rejected, (state, { payload }) => {
      state.isError = payload as null;
    });
  },
});

export const selectCats = (state: RootState) => state.cats;

const catsReducer = catsSlice.reducer;
export default catsReducer;
