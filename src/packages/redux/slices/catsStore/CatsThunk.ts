import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBaseUrl } from "../../../axios";
import { FetchCatsType } from "./type";

export const getCats = createAsyncThunk<any, FetchCatsType>(
  "cats/getCats",
  async ({ categoryId, page }, { rejectWithValue }) => {
    try {
      const { data } = await axiosBaseUrl(`/images/search`, {
        params: {
          limit: 10,
          page: page ? page : 1,
          category_ids: categoryId ? categoryId : null,
        },
      });
      return { data, categoryId };
    } catch (error: any) {
      rejectWithValue(error.response.data);
    }
  }
);
