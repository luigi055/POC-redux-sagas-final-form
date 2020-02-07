import { ID } from "../../../models/book/book.types";
import { removeBookDefinition } from "../../../features/books/actions.types";

export const handleRemoveUser = (
  bookId: ID,
  removeUserAction: removeBookDefinition
) => () => removeUserAction(bookId);
