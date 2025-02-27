import {DropdownMenuIcon} from "@radix-ui/react-icons";
import {Button, Flex, Popover, Text} from "@radix-ui/themes";
import {PopoverPagination} from "../../interfaces/Filters";

export const FilterPageSize = ({
  paginationSize,
  setPagination,
}: PopoverPagination) => {
  function updatePageSize(size: number) {
    setPagination(prev => {
      return {...prev, pageSize: size};
    });
  }

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft" color="gray">
          <DropdownMenuIcon />
          <Text>Page size: {paginationSize}</Text>
        </Button>
      </Popover.Trigger>
      <Popover.Content width="80px">
        <Flex direction={"column"} gap={"2"}>
          <Button variant="outline" onClick={() => updatePageSize(4)}>
            4
          </Button>
          <Button variant="outline" onClick={() => updatePageSize(8)}>
            8
          </Button>
          <Button variant="outline" onClick={() => updatePageSize(12)}>
            12
          </Button>
          <Button variant="outline" onClick={() => updatePageSize(16)}>
            16
          </Button>
          <Button variant="outline" onClick={() => updatePageSize(20)}>
            20
          </Button>
          <Button variant="outline" onClick={() => updatePageSize(24)}>
            24
          </Button>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};
