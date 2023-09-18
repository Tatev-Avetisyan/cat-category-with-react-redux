import { T_SetState } from "../../shared/types";

export interface I_CategoriesProps {
  setCategoryId: T_SetState<number>;
  className?: string
  extraStyle?:string
}
