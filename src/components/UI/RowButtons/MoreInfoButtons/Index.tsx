import {FilePlusIcon} from "@radix-ui/react-icons";
import {Button, DataList, Dialog, Flex} from "@radix-ui/themes";
import {Book} from "../../../../types/book.type";
import {Author} from "../../../../types/author.type";

type DataItem = {[key: string]: any};

interface detailsProps<T extends DataItem> {
  data: T;
}

const Details = <T extends DataItem>({data}: detailsProps<T>) => {
  const keys = Object.keys(data);

  return (
    <>
      <Dialog.Description size="2" mb="4">
        More info about {data["title"] || data["title"]}
      </Dialog.Description>
      <DataList.Root>
        {keys.map(key => {
          const value = data[key];

          if (typeof value === "object" && value !== null) {
            return (
              <DataList.Item key={key} align="center">
                <DataList.Label minWidth="88px">{key}</DataList.Label>
                <DataList.Value>
                  {JSON.stringify(value) || "N/A"}
                </DataList.Value>
              </DataList.Item>
            );
          }

          return (
            <DataList.Item key={key} align="center">
              <DataList.Label minWidth="88px">{key}</DataList.Label>
              <DataList.Value>{value || "N/A"}</DataList.Value>
            </DataList.Item>
          );
        })}
      </DataList.Root>
    </>
  );
};

export const MoreInfoButton = ({data}: {data: Book | Author}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="outline" color="violet" data-test="more-info-button">
          <FilePlusIcon />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Flex direction={"row"} justify={"between"}>
          <Dialog.Title>More Info</Dialog.Title>
          <Dialog.Close >
            <Button variant="outline" color="red" data-test="close-more-info-button-modal">
              X
            </Button>
          </Dialog.Close>
        </Flex>
        <Details data={data} />
      </Dialog.Content>
    </Dialog.Root>
  );
};
