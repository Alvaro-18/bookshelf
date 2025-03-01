import {createContext, useState, ReactNode, useEffect} from "react";
import {Book} from "../types/book.type";
import {Author} from "../types/author.type";

interface UserContextType {
  books: Book[];
  setBook: (newBook: Book) => void;
  deleteBook: (id: string) => void;
  bookCategories: string[];
  addBookCategory: (name: string) => void;
  authors: Author[];
  setAuthor: (newAuthor: Author) => void;
  deleteAuthor: (id: string) => void;
  authorCategories: string[];
  addAuthorCategory: (name: string) => void;
}

export const UserContext = createContext<UserContextType>({
  books: [],
  setBook: (newBook: Book) => {},
  deleteBook: (id: string) => {},
  bookCategories: [],
  addBookCategory: (name: string) => {},
  authors: [],
  setAuthor: (newAuthor: Author) => {},
  deleteAuthor: (id: string) => {},
  authorCategories: [],
  addAuthorCategory: (name: string) => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({children}: UserContextProviderProps) {
  const storedBooks = localStorage.getItem("books");
  const storedAuthors = localStorage.getItem("authors");
  const storedBookCategories = localStorage.getItem("bookCategories");
  const storedAuthorCategories = localStorage.getItem("authorCategories");

  const booksFromStorage: Book[] = storedBooks ? JSON.parse(storedBooks) : [];
  const authorsFromStorage: Author[] = storedAuthors
    ? JSON.parse(storedAuthors)
    : [];
  const categoriesBooksFromStorage: string[] = storedBookCategories
    ? JSON.parse(storedBookCategories)
    : [];
  const categoriesAuthorsFromStorage: string[] = storedAuthorCategories
    ? JSON.parse(storedAuthorCategories)
    : [];

  const [books, setBooks] = useState<Book[]>(booksFromStorage);
  const [authors, setAuthors] = useState<Author[]>(authorsFromStorage);
  const [bookCategories, setBookCategories] = useState<string[]>(
    categoriesBooksFromStorage,
  );
  const [authorCategories, setAuthorCategories] = useState<string[]>(
    categoriesAuthorsFromStorage,
  );

  function setBook(newBook: Book) {
    const bookIndex = books.findIndex(item => item.id === newBook.id);

    if (bookIndex !== -1) {
      setBooks(prevBooks => {
        const updatedBooks = [...prevBooks];
        updatedBooks[bookIndex] = newBook;
        return updatedBooks;
      });
    } else {
      setBooks(prev => [...prev, newBook]);
    }
  }

  function deleteBook(id: string) {
    const filteredList = books.filter(item => item.id !== id);
    setBooks(filteredList);
  }

  function addBookCategory(name: string) {
    setBookCategories(prev => {
      const hasThisCategory = prev.includes(name);

      if (hasThisCategory) return prev;

      return [...prev, name];
    });
  }

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    if (books.length == 0) {
      setBookCategories([]);
    }
  }, [books]);

  function setAuthor(newAuthor: Author) {
    const authorIndex = authors.findIndex(item => item.id === newAuthor.id);

    if (authorIndex !== -1) {
      setAuthors(prev => {
        const updatedAuthors = [...prev];
        updatedAuthors[authorIndex] = newAuthor;
        return updatedAuthors;
      });
    } else {
      setAuthors(prev => [...prev, newAuthor]);
    }
  }

  function deleteAuthor(id: string) {
    const filteredList = authors.filter(item => item.id !== id);
    setAuthors(filteredList);
  }

  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors));
    if (authors.length == 0) {
      setAuthorCategories([]);
    }
  }, [authors]);

  function addAuthorCategory(name: string) {
    setAuthorCategories(prev => {
      const hasThisCategory = prev.includes(name);

      if (hasThisCategory) return prev;

      return [...prev, name];
    });
  }

  useEffect(() => {
    localStorage.setItem("bookCategories", JSON.stringify(bookCategories));
  }, [bookCategories]);

  useEffect(() => {
    localStorage.setItem("authorCategories", JSON.stringify(authorCategories));
  }, [authorCategories]);

  return (
    <UserContext.Provider
      value={{
        books,
        setBook,
        deleteBook,
        bookCategories,
        addBookCategory,
        authors,
        setAuthor,
        deleteAuthor,
        addAuthorCategory,
        authorCategories,
      }}>
      {children}
    </UserContext.Provider>
  );
}
