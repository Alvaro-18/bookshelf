import {DropdownMenuIcon} from "@radix-ui/react-icons";
import {Box, Button, Flex, Popover} from "@radix-ui/themes";
import {GenericPopovers, PopoverItemInterface} from "../../interfaces/Filters";

function PopoverItem({
  item,
  setColumnFilters,
  isActive,
  filterId,
}: PopoverItemInterface) {
  return (
    <Button
      color={isActive ? "sky" : "gray"}
      onClick={() => {
        setColumnFilters(prev => [
          ...prev.filter(f => f.id !== filterId),
          {id: filterId, value: isActive ? "" : item},
        ]);
      }}>
      {item}
    </Button>
  );
}

export const FilterPopover = ({
  columnFilters,
  setColumnFilters,
  filterId,
  options,
}: GenericPopovers) => {
  const filterCategory =
    columnFilters.find(f => f.id === filterId)?.value || [];

  return (
    <Box>
      <Popover.Root>
        <Popover.Trigger>
          <Button variant="soft" color="gray">
            <DropdownMenuIcon />
            {filterId}
          </Button>
        </Popover.Trigger>
        <Popover.Content width="296px">
          <Flex align="start" gap="2" wrap={"wrap"} mb={"2"}>
            {options.map((item, index) => (
              <PopoverItem
                filterId={filterId}
                item={item}
                isActive={filterCategory == item}
                setColumnFilters={setColumnFilters}
                key={index}
              />
            ))}
          </Flex>
        </Popover.Content>
      </Popover.Root>
    </Box>
  );
};
