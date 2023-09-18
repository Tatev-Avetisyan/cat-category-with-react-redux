import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesThunk";
import { RootState } from "../types";
import { CategoryInitialStateType } from "./type";

const initialState: CategoryInitialStateType = {
  data: [],
  isLoading: false,
  isError: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.isError = payload as null;
    });
  },
});

export const selectCategories = (state: RootState) => state.categories;

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
