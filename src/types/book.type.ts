import {Author} from "./author.type";

export type Book = {
  id: string;
  title: string;
  author: Author;
  publisher: string;
  yearOfPublication: number;
  language: string;
  numberOfPages: number;
  category: string;
  synopsis: string;
  menu: boolean;
};
