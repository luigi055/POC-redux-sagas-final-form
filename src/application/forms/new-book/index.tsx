import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { Format } from "../../../models/book/book.types";
import Props from "./props";
import Book from "../../../models/book";
import validation from "./validation";
import FormInput from "../fields/form-input";
import FormSelect from "../fields/form-select";
import FormTextArea from "../fields/form-textarea";
import { addBook } from "../../../features/books/actions";
import IBook from "../../../models/book/interface";
import { State } from "../../store/store.types";
import { selectBookCollection } from "../../../features/books/selectors";

const newBook = ({ addBook }: Props) => (
  <Form
    onSubmit={(book: IBook) => {
      addBook(book);
    }}
    initialValues={new Book()}
    validate={validation}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <FormInput
          name="title"
          label="Title"
          type="text"
          placeholder="Book Title"
        />

        <FormInput
          name="author"
          label="Author"
          type="text"
          placeholder="Book Author"
        />

        <FormInput name="pages" label="Pages" type="number" />

        <div>
          <label>is Used?</label>
          <Field name="isUsed" component="input" type="checkbox" />
        </div>

        <FormSelect name="format" label="Format">
          <option value={Format.HARDCOVER}>{Format.HARDCOVER}</option>
          <option value={Format.PAPERBACK}>{Format.PAPERBACK}</option>
          <option value={Format.DIGITAL}>{Format.DIGITAL}</option>
        </FormSelect>

        <div>
          <label>Genres</label>
          <div>
            <label>
              <Field
                name="genres"
                component="input"
                type="checkbox"
                value="academic"
              />{" "}
              Academic
            </label>
            <label>
              <Field
                name="genres"
                component="input"
                type="checkbox"
                value="sci-fi"
              />{" "}
              Sci-fi
            </label>
          </div>
        </div>

        <FormTextArea
          name="description"
          label="Description"
          placeholder="description"
        />

        <div className="buttons">
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
          <button
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
        </div>
      </form>
    )}
  />
);

const mapStateToProps = (state: State) => ({
  books: selectBookCollection(state)
});

export default connect(mapStateToProps, { addBook })(newBook);
