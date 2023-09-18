export interface CategoryType {
  id: number;
  name: string;
}
export interface RequestType {
  isLoading: boolean;
  isError: any;
}

export interface CategoryInitialStateType extends RequestType {
  data: CategoryType[] | null;
}
