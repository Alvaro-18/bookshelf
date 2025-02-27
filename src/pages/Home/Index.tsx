import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {ThemeToggle} from "../../components/UI/ThemeToggle/Index";
import {useContext, useMemo, useState} from "react";
import {books} from "../../assets/faker";
import {Header, Nav, Container, Main} from "./Index.styles";
import {Button, Table} from "@radix-ui/themes";
import {BookmarkIcon, PersonIcon} from "@radix-ui/react-icons";
import {ThemeContext} from "../../contexts/ThemeContext";
import {Filters} from "../../components/Filters/Index";

export const HomePage = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title" as string,
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "author",
        header: "Author" as string,
        cell: (props: any) => <p>{props.getValue()?.fullName}</p>,
      },
      {
        accessorKey: "yearOfPublication",
        header: "Year of publication" as string,
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "category",
        header: "category" as string,
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
    ],
    [],
  );
  const {theme, switchTheme} = useContext(ThemeContext);
  const [data, setData] = useState(books);
  const [columnFilters, setColumnFilters] = useState([
    {id: "title", value: ""},
  ]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container>
      <Header>
        <h1>Book List</h1>
        <Nav>
          <Button variant="solid" color="brown" radius="large">
            <BookmarkIcon /> Books
          </Button>
          <Button variant="solid" color="green" radius="large">
            <PersonIcon /> Authors
          </Button>
        </Nav>
      </Header>
      <Main>
        <Filters
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
        <Table.Root variant="surface">
          <Table.Header>
            {table.getHeaderGroups().map(headerGroup => (
              <Table.Row key={headerGroup.id} style={{position: "relative"}}>
                {headerGroup.headers.map(header => (
                  <Table.ColumnHeaderCell key={header.id}>
                    {typeof header.column.columnDef.header === "string"
                      ? header.column.columnDef.header
                      : null}
                  </Table.ColumnHeaderCell>
                ))}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {table.getRowModel().rows.map(row => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Main>
      <footer>
        <ThemeToggle theme={theme} switchThemeFunction={switchTheme} />
      </footer>
    </Container>
  );
};
