import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Box, TextField} from "@radix-ui/themes";
import {useEffect, useState} from "react";
import {Container} from "./Index.styles";
import {FilterPopover} from "../FilterPopover/Index";
import {FilterPageSize} from "../FilterPageSize/Index";
import {FiltersInterface} from "../../interfaces/Filters";

export const Filters = ({
  columnFilters,
  setColumnFilters,
  paginationSize,
  setPagination,
}: FiltersInterface) => {
  const bookName = columnFilters.find(book => book.id == "title")?.value || "";
  const [value, setValue] = useState(bookName);

  const onFilterChange = (id: string, value: string) => {
    setColumnFilters(prev => [...prev.filter(f => f.id !== id), {id, value}]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilterChange("title", value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Container>
      <Box maxWidth="300px">
        <TextField.Root
          placeholder="Search the book name"
          size="2"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Box>
      <FilterPopover
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
        filterId="category"
        options={["Fantasy", "Mystery", "Terror"]}
      />
      <FilterPageSize
        paginationSize={paginationSize}
        setPagination={setPagination}
      />
    </Container>
  );
};
