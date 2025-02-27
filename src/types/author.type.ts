import { Book } from "./book.type";

export type Author = {
  id: string;
  fullName: string;
  biography?: string;
  dateOfBirth?: string;
  nationality?: string;
  literaryGenres: string[];
  books?: Book[];
};
