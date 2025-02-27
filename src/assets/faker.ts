import {Author} from "../types/author.type";
import {Book} from "../types/book.type";

// Dados de exemplo de autores
export const authors: Author[] = [
  {
    id: "a1",
    fullName: "J.K. Rowling",
    biography:
      "J.K. Rowling é uma autora britânica, conhecida principalmente por escrever a série de livros Harry Potter.",
    dateOfBirth: "1965-07-31",
    nationality: "British",
    literaryGenres: ["Fantasy", "Drama", "Young Adult"],
    books: [],
  },
  {
    id: "a2",
    fullName: "George R.R. Martin",
    biography:
      'George R. R. Martin é um autor de fantasia e ficção científica, mais famoso pela série de livros "A Song of Ice and Fire", que inspirou a série "Game of Thrones".',
    dateOfBirth: "1948-09-20",
    nationality: "American",
    literaryGenres: ["Fantasy", "Drama", "Adventure"],
    books: [],
  },
  {
    id: "a3",
    fullName: "Agatha Christie",
    biography:
      "Agatha Christie foi uma escritora britânica conhecida por seus livros de mistério, incluindo os famosos personagens Hercule Poirot e Miss Marple.",
    dateOfBirth: "1890-09-15",
    nationality: "British",
    literaryGenres: ["Mystery", "Crime", "Detective"],
    books: [],
  },
];

// Dados de exemplo de livros
export const books: Book[] = [
  {
    id: "b1",
    title: "Harry Potter and the Sorcerer's Stone",
    author: authors[0],
    publisher: "Bloomsbury",
    yearOfPublication: 1997,
    language: "English",
    numberOfPages: 309,
    category: "Fantasy",
    synopsis:
      "Harry Potter, um jovem bruxo, começa sua jornada na escola de magia Hogwarts, onde descobre segredos sobre seu passado e seu vínculo com o vilão Lord Voldemort.",
    menu: true,
  },
  {
    id: "b2",
    title: "A Game of Thrones",
    author: authors[1],
    publisher: "Bantam Books",
    yearOfPublication: 1996,
    language: "English",
    numberOfPages: 694,
    category: "Fantasy",
    synopsis:
      "No continente de Westeros, as famílias nobres lutam pelo trono de ferro, enquanto forças sobrenaturais ameaçam o reino e suas vidas.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
  {
    id: "b3",
    title: "Murder on the Orient Express",
    author: authors[2],
    publisher: "Collins Crime Club",
    yearOfPublication: 1934,
    language: "English",
    numberOfPages: 256,
    category: "Mystery",
    synopsis:
      "O detetive Hercule Poirot investiga um assassinato ocorrido em um trem de luxo, onde todos os passageiros parecem ter algo a esconder.",
    menu: true,
  },
];
