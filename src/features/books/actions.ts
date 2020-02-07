import { ID } from "../../models/book/book.types";
import { ADD_BOOK, REMOVE_BOOK } from "./types";
import IBook from "../../models/book/interface";

export const addBook = (book: IBook) => ({
  type: ADD_BOOK,
  payload: book
});

export const removeBook = (id: ID) => ({
  type: REMOVE_BOOK,
  payload: id
});
