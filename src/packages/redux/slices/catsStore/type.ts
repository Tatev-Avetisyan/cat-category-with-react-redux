export interface CatsType {
  id: number;
  url: string;
}
export interface RequestType {
  isLoading: boolean;
  isError: any;
}

export interface CatInitialStateType extends RequestType {
  data: CatsType[] | null;
  page?: number;
}

export interface ICatsWithCategory {
  id: CatInitialStateType;
}

export interface FetchCatsType {
  categoryId: number | undefined;
  page: number;
}
