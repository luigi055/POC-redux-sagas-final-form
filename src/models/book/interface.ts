import * as types from "./types";

export default interface Book {
  id: types.ID;
  title: types.Title;
  author: types.Author;
  genres: types.Genres;
  pages: types.Pages;
  format: types.Format;
  price: types.Price;
  isUsed: types.isUsed;
  description: types.Description;
}
