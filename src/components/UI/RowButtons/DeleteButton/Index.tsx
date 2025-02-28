import {TrashIcon} from "@radix-ui/react-icons";
import {Flex, Button, AlertDialog} from "@radix-ui/themes";

export const DeleteButton = ({onClick}:{onClick: () => void}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="outline" color="red">
          <TrashIcon color="#fff" />
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This item has been deleted and can no longer be accessed
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={onClick}>
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
