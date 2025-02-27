import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Box, TextField} from "@radix-ui/themes";
import {useEffect, useState} from "react";
import { Container } from "./Index.styles";

export const Filters = ({
  columnFilters,
  setColumnFilters,
}: {
  columnFilters: {id: string; value: string}[];
  setColumnFilters: React.Dispatch<
    React.SetStateAction<{id: string; value: string}[]>
  >;
}) => {
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
      <Box maxWidth="200px">
        <TextField.Root
          placeholder="Search the book name"
          size="1"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Box>
    </Container>
  );
};
