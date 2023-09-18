import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../slices/types";
import categoriesReducer from "../slices/categoriesStore";
import catsReducer from "../slices/catsStore";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cats: catsReducer,
  },
});
