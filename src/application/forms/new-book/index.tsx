import React from "react";
import { Form, Field } from "react-final-form";
import { Format } from "../../../models/book/types";
import Props from "./props";
import Book from "../../../models/book";
import validation from "./validation";
import FormInput from "../fields/form-input";
import FormSelect from "../fields/form-select";
import FormTextArea from "../fields/form-textarea";

const newBook = ({ onSubmit }: Props) => (
  <Form
    onSubmit={onSubmit}
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

export default newBook;
