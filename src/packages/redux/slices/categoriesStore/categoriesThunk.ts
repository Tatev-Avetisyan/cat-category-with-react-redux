import { axiosBaseUrl } from "../../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const getAllCategories = await axiosBaseUrl("/categories");
      return getAllCategories.data;
    } catch (error: any) {
      rejectWithValue(error.response.data);
    }
  }
);
