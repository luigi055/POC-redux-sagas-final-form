import React from "react";
import { connect } from "react-redux";
import { removeBook } from "../../../features/books/actions";
import { State } from "../../../application/store/store.types";
import Props from "./props";
import { selectBookCollection } from "../../../features/books/selectors";
import { handleRemoveUser } from "./collaborators";

const UserList = ({ books, removeBook }: Props) => (
  <ul>
    {books.map(book => (
      <li key={book.id}>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <button type="button" onClick={handleRemoveUser(book.id, removeBook)}>
          Remove
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state: State) => ({
  books: selectBookCollection(state)
});

export default connect(mapStateToProps, { removeBook })(UserList);
