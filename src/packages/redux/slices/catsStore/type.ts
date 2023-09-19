import { categories } from "..";

export interface I_CatsType {
  id: number;
  url: string;
  width: number;
  height: number;
}
export interface RequestType {
  isLoading: boolean;
  isError: any;
}
export type T_CatsState = {
  [categoryId: number]: I_CatsType[];
};

export interface ICatsWithCategory extends RequestType {
  data: T_CatsState | null;
}

export interface FetchCatsType {
  categoryId: number | undefined;
  page: number;
}
