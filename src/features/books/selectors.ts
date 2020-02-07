import { State } from "../../application/store/store.types";

export const selectBookCollection = (state: State) => state.books.collection;
