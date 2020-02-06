import React, { useState } from "react";
import IBook from "./models/book/interface";
import NewBookForm from "./application/forms/new-book";
import { ID } from "./models/book/types";

const isSameBook = (id: string, bookId: string) => id === bookId;

const App = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const onSubmit = (values: IBook) => {
    setBooks([...books, values]);
  };

  const handleRemoveUser = (id: ID) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const newBooks = books.filter(book => !isSameBook(id, book.id));
    setBooks(newBooks);
  };

  return (
    <div>
      <NewBookForm onSubmit={onSubmit} />
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

export default App;
