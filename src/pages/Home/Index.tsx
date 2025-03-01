import {useContext, useMemo, useState} from "react";
import {ActivityLogIcon, BookmarkIcon, PersonIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";
import {ThemeContext} from "../../contexts/ThemeContext";
import {Header, Nav, Container, Main, Footer} from "./Index.styles";
import {ThemeToggle} from "../../components/UI/ThemeToggle/Index";
import {TableView} from "../../components/TableView/Index";
import {RowButtons} from "../../components/UI/RowButtons/Index";
import {UserContext} from "../../contexts/UserContext";
import {Book} from "../../types/book.type";
import {Author} from "../../types/author.type";

export const HomePage = () => {
  const {books, authors} = useContext(UserContext);
  const {theme, switchTheme} = useContext(ThemeContext);
  const [tabState, setTabState] = useState({
    name: "book",
  });

  const getColumns = (tab: string) => [
    {
      accessorKey: tab == "book" ? "title" : "fullName",
      header: tab == "book" ? "Title" : "Full name",
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: tab == "book" ? "author" : "dateOfBirth",
      header: tab == "book" ? "author" : "Date of birth",
      cell: (props: any) => (
        <p>{tab == "book" ? props.getValue()?.fullName : props.getValue()}</p>
      ),
    },
    {
      accessorKey: tab == "book" ? "yearOfPublication" : "nationality",
      header: tab == "book" ? "Year" : "Nationality",
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "category",
      enableSorting: false,
      header: "Category" as string,
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "menu",
      enableSorting: false,
      header: "Menu" as string,
      cell: (props: any) => (
        <RowButtons data={props.table.options.data[props.cell.row.id]} />
      ),
    },
  ];

  const columns = useMemo(
    () => getColumns(tabState.name as "book" | "author"),
    [tabState.name],
  );

  return (
    <Container>
      <Header>
        <h1>
          <ActivityLogIcon width={24} height={24} /> {tabState.name} list
        </h1>
        <Nav>
          <Button
          data-test="navigation-book-button"
            onClick={() => setTabState({name: "book"})}
            variant={tabState.name == "book" ? "solid" : "outline"}
            color={tabState.name == "book" ? "brown" : "gray"}
            radius="large">
            <BookmarkIcon /> Books
          </Button>
          <Button
          data-test="navigation-author-button"

            onClick={() => setTabState({name: "author"})}
            variant={tabState.name == "author" ? "solid" : "outline"}
            color={tabState.name == "author" ? "green" : "gray"}
            radius="large">
            <PersonIcon /> Authors
          </Button>
        </Nav>
      </Header>
      <Main>
        <TableView<Book | Author>
          key={tabState.name}
          columns={columns}
          data={tabState.name == "book" ? books : authors}
          tableName={tabState.name}
        />
      </Main>
      <Footer>
        <ThemeToggle theme={theme} switchThemeFunction={switchTheme} />
      </Footer>
    </Container>
  );
};
