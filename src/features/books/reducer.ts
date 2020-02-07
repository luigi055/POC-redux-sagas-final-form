import { ID } from "../../models/book/book.types";
import { ADD_BOOK, REMOVE_BOOK } from "./types";
import { Action, BooksState } from "../../application/store/store.types";

const INITIAL_STATE: BooksState = { collection: [], error: { message: "" } };

const isSameBook = (id: ID, bookId: ID) => id === bookId;

export default function booksReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        collection: [action.payload, ...state.collection]
      };
    case REMOVE_BOOK:
      const updatedCollection = state.collection.filter(
        book => !isSameBook(action.payload, book.id)
      );
      return {
        ...state,
        collection: updatedCollection
      };
    default:
      return state;
  }
}
