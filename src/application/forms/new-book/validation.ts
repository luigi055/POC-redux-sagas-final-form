import IBook from "../../../models/book/interface";

interface Errors {
  title: string | undefined;
  author: string | undefined;
}

interface Errors {
  title: undefined | string;
  pages: undefined | string;
  author: undefined | string;
}

const validateNewBook = (values: IBook) => {
  const errors: Errors = {
    title: undefined,
    author: undefined,
    pages: undefined
  };

  if (!values.title) {
    errors.title = "The book title is required.";
  }

  if (!values.author) {
    errors.author = "The book author is required";
  }

  if (values.pages === 0) {
    errors.pages = "Enter the number of pages";
  }

  return errors;
};

export default validateNewBook;
