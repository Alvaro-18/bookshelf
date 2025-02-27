import {Flex} from "@radix-ui/themes";
import {EditButton} from "./EditButton/Index";
import {DeleteButton} from "./DeleteButton/Index";

export const RowButtons = () => {
  return (
    <Flex gap={"2"}>
      <EditButton />
      <DeleteButton />
    </Flex>
  );
};
