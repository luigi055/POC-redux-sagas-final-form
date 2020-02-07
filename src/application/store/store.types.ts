import IBook from "../../models/book/interface";

interface Error {
  message: string;
}

export interface Action {
  type: string;
  payload: any;
  meta?: any;
  error?: any;
}

export interface BooksState {
  collection: IBook[];
  error: Error;
}

export interface State {
  books: BooksState;
}
