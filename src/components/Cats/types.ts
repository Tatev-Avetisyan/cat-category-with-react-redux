import { T_SetState } from "../../shared/types";

export interface I_CatsProps {
  page: number;
  categoryId: number;
  setPage: T_SetState<number>;
  setCategoryId: T_SetState<number>;
}
