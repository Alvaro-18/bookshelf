import {useMemo, useState} from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  CaretSortIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import {Button, Flex, Table, Text} from "@radix-ui/themes";

import {books} from "../../assets/faker";
import {HeaderContainer} from "./Index.styles";
import {Filters} from "../Filters/Index";
import {RowButtons} from "../UI/RowButtons/Index";
import {Form} from "./Form/Index";

export const BookTableView = () => {
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
        header: "Year" as string,
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
        cell: (props: any) => <RowButtons />,
      },
    ],
    [],
  );
  const [data, setData] = useState(books);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });
  const [columnFilters, setColumnFilters] = useState([
    {id: "title", value: ""},
  ]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      pagination,
    },
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  function setPageIndex(prevPage: boolean) {
    setPagination(prev => {
      if (prevPage && table.getCanPreviousPage()) {
        return {
          ...prev,
          pageIndex: prev.pageIndex - 1,
        };
      }

      if (!prevPage && table.getCanNextPage()) {
        return {
          ...prev,
          pageIndex: prev.pageIndex + 1,
        };
      }
      return prev;
    });
  }
  return (
    <>
      <Flex justify={"between"} wrap={"wrap"}>
        <Filters
          paginationSize={pagination.pageSize}
          setPagination={setPagination}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
        <Form />
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          {table.getHeaderGroups().map(headerGroup => (
            <Table.Row key={headerGroup.id} style={{position: "relative"}}>
              {headerGroup.headers.map(header => (
                <Table.ColumnHeaderCell key={header.id}>
                  <HeaderContainer>
                    {typeof header.column.columnDef.header === "string"
                      ? header.column.columnDef.header
                      : null}

                    {header.column.getCanSort() && (
                      <>
                        {header.column.getIsSorted() === "asc" && (
                          <ChevronDownIcon
                            onClick={header.column.getToggleSortingHandler()}
                            width={20}
                            height={16}
                          />
                        )}

                        {header.column.getIsSorted() === "desc" && (
                          <ChevronUpIcon
                            onClick={header.column.getToggleSortingHandler()}
                            width={20}
                            height={16}
                          />
                        )}

                        {header.column.getIsSorted() === false && (
                          <CaretSortIcon
                            onClick={header.column.getToggleSortingHandler()}
                            width={20}
                            height={20}
                          />
                        )}
                      </>
                    )}
                  </HeaderContainer>
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
      <Text size={"1"}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </Text>
      <div style={{marginTop: 4}}>
        <Button
          color="gray"
          variant="outline"
          disabled={!table.getCanPreviousPage()}
          onClick={() => setPageIndex(true)}>
          <ChevronLeftIcon />
        </Button>
        <Button
          color="gray"
          variant="outline"
          disabled={!table.getCanNextPage()}
          onClick={() => setPageIndex(false)}>
          <ChevronRightIcon />
        </Button>
      </div>
    </>
  );
};
