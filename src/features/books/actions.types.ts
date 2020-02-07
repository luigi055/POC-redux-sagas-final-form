import { ID } from "../../models/book/book.types";
import IBook from "./../../models/book/interface";

export type removeBookDefinition = (id: ID) => void;
export type addBookDefinition = (book: IBook) => void;
