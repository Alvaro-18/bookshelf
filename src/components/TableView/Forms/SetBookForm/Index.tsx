import {
  Button,
  Dialog,
  Flex,
  Text,
  TextField,
  TextArea,
  Select,
} from "@radix-ui/themes";
import {useContext} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {UserContext} from "../../../../contexts/UserContext";
import {Book} from "../../../../types/book.type";
import {Pencil1Icon} from "@radix-ui/react-icons";

export const SetBookForm = ({data}: {data?: Book}) => {
  const {setBook, authors, addBookCategory} = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: data || {
      id: `${Math.random()}`,
      title: "",
      author: {
        id: "",
        fullName: "",
      },
      publisher: "",
      yearOfPublication: 1,
      language: "",
      numberOfPages: 1,
      category: "",
      synopsis: "",
      menu: true,
    },
  });

  const onSubmit: SubmitHandler<Book> = book => {
    const author = authors.find(item => item.id === book.author.id);
    if (!author) return;

    const newBook = {...book, author};
    setBook(newBook);
    addBookCategory(newBook.category);
    if (!data) {
      reset();
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {data ? (
          <Button variant="outline" color="grass">
            <Pencil1Icon />
          </Button>
        ) : (
          <Button variant="outline" color="brown">
            Add new book +
          </Button>
        )}
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add new book +</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Fill in the inputs
        </Dialog.Description>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Title
              </Text>
              <Controller
                name="title"
                control={control}
                rules={{required: "Title required"}}
                render={({field}) => (
                  <TextField.Root placeholder="title" {...field} />
                )}
              />
              <Text color="red" size="1" mt="1">
                {errors.title?.message}
              </Text>
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Author
              </Text>
              <Controller
                name="author.id"
                control={control}
                rules={{required: "Author required"}}
                render={({field}) => (
                  <Select.Root
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}>
                    <Select.Trigger placeholder="Select an author" />

                    <Select.Content>
                      {authors.map((item, index) => (
                        <Select.Item key={index} value={item.id}>
                          {item.fullName}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                )}
              />
              <Text as="div" color="red" size="1" mt="1">
                {errors.author?.id?.message}
              </Text>
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Publisher
              </Text>
              <Controller
                name="publisher"
                control={control}
                rules={{required: "Publisher required"}}
                render={({field}) => (
                  <TextField.Root placeholder="publisher" {...field} />
                )}
              />
              <Text color="red" size="1" mt="1">
                {errors.publisher?.message}
              </Text>
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Year of publication
              </Text>
              <Controller
                name="yearOfPublication"
                control={control}
                rules={{
                  required: "year of publication required",
                  maxLength: {
                    value: 4,
                    message: "Year of publication should not exceed 4 digits",
                  },
                }}
                render={({field}) => (
                  <TextField.Root
                    type="number"
                    placeholder="Year of publication"
                    {...field}
                  />
                )}
              />
              <Text color="red" size="1" mt="1">
                {errors.yearOfPublication?.message}
              </Text>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Language
              </Text>
              <Controller
                name="language"
                control={control}
                rules={{required: "Language required"}}
                render={({field}) => (
                  <TextField.Root placeholder="language" {...field} />
                )}
              />
              <Text color="red" size="1" mt="1">
                {errors.language?.message}
              </Text>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Number of pages
              </Text>
              <Controller
                name="numberOfPages"
                control={control}
                rules={{required: "Number of pages required"}}
                render={({field}) => (
                  <TextField.Root type="number" placeholder="1" {...field} />
                )}
              />
              <Text color="red" size="1" mt="1">
                {errors.numberOfPages?.message}
              </Text>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Category
              </Text>
              <Controller
                name="category"
                control={control}
                rules={{required: "Category required"}}
                render={({field}) => (
                  <TextField.Root placeholder="Category" {...field} />
                )}
              />
              <Text color="red" size="1" mt="1">
                {errors.category?.message}
              </Text>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Synopsis
              </Text>
              <Controller
                name="synopsis"
                control={control}
                rules={{required: "Synopsis required"}}
                render={({field}) => (
                  <TextArea
                    resize={"none"}
                    placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis distinctio omnis modi dolorum autem nulla, sit laborum voluptates ab animi nostrum ea nemo. Reprehenderit maxime eveniet quaerat expedita totam!"
                    {...field}
                  />
                )}
              />
              <Text color="red" size="1" mt="1">
                {errors.synopsis?.message}
              </Text>
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray" onClick={() => reset()}>
                Cancel
              </Button>
            </Dialog.Close>

            <Button type="submit">Save</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
