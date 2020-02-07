import React from "react";
import { connect } from "react-redux";
import IBook from "./models/book/interface";
import NewBookForm from "./application/forms/new-book";
import { ID } from "./models/book/types";
import { addBook, removeBook } from "./features/books/actions";
import { State } from "./features/store/types";

interface Props {
  addBook: (book: IBook) => void;
  removeBook: (id: ID) => void;
  books: IBook[];
}

const App = (props: Props) => {
  const { addBook, books, removeBook } = props;

  const handleRemoveUser = (id: ID) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    removeBook(id);
  };

  return (
    <div>
      <NewBookForm onSubmit={(book: IBook) => addBook(book)} />
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <button type="button" onClick={handleRemoveUser(book.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  books: state.books.collection
});

export default connect(mapStateToProps, { addBook, removeBook })(App);
