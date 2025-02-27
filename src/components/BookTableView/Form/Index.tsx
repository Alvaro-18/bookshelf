import {
  Button,
  Dialog,
  Flex,
  Text,
  TextField,
  TextArea,
} from "@radix-ui/themes";

export const Form = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="outline" color="brown">
          Add new book +
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add new book +</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Fill in the inputs
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Title
            </Text>
            <TextField.Root
              defaultValue="Darling"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              publisher
            </Text>
            <TextField.Root
              defaultValue="The Darling"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              year Of Publication
            </Text>
            <TextField.Root type="number" placeholder="2004" maxLength={4} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Language
            </Text>
            <TextField.Root
              defaultValue="Portuguese"
              placeholder="Enter your email"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Number of pages
            </Text>
            <TextField.Root
              type="number"
              min={1}
              defaultValue="1"
              placeholder="1"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Category
            </Text>
            <TextField.Root defaultValue="Fantasy" placeholder="Fantasy" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              synopsis
            </Text>
            <TextArea resize={"none"} />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
