import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Box, TextField} from "@radix-ui/themes";
import {useContext, useEffect, useState, useCallback} from "react";
import {Container} from "./Index.styles";
import {FilterPopover} from "./FilterPopover/Index";
import {FilterPageSize} from "./FilterPageSize/Index";
import {FiltersInterface} from "../../interfaces/Filters.interface";
import {UserContext} from "../../contexts/UserContext";

export const Filters = ({
  filterId,
  columnFilters,
  setColumnFilters,
  paginationSize,
  setPagination,
}: FiltersInterface) => {
  const [searchItem, setSearchItem] = useState({id: filterId, value: ""});
  const {bookCategories, authorCategories} = useContext(UserContext);

  const onFilterChange = useCallback(
    (value: string, filterId: string) => {
      setColumnFilters(prev => [
        ...prev.filter(f => f.id !== filterId),
        {id: filterId, value},
      ]);
    },
    [filterId],
  );

  useEffect(() => {
    const filterValue =
      columnFilters.find(filter => filter.id === filterId)?.value || "";
    setSearchItem({id: filterId, value: filterValue});
  }, [filterId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilterChange(searchItem.value, searchItem.id);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchItem, onFilterChange]);

  return (
    <Container>
      <Box maxWidth="300px">
        <TextField.Root
          aria-label="Search the name"
          placeholder={`Search the name`}
          size="2"
          onChange={e =>
            setSearchItem(prev => ({...prev, value: e.target.value}))
          }
          value={searchItem.value}>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Box>
      <FilterPopover
        key={filterId}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
        filterId="category"
        options={filterId == "title" ? bookCategories : authorCategories}
      />
      <FilterPageSize
        paginationSize={paginationSize}
        setPagination={setPagination}
      />
    </Container>
  );
};
