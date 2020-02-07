import { removeBookDefinition } from "./../../../features/books/actions.types";
import IBook from "../../../models/book/interface";

interface Props {
  removeBook: removeBookDefinition;
  books: IBook[];
}

export default Props;
