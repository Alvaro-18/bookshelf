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
      id: "",
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

    if (!data) {
      setBook({...book, id: crypto.randomUUID(), author});
    } else {
      setBook({...book, author});
    }

    addBookCategory(book.category);
    if (!data) {
      reset();
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {data ? (
          <Button variant="outline" color="grass" data-test="edit-button">
            <Pencil1Icon />
          </Button>
        ) : (
          <Button variant="outline" color="brown" data-test="add-button">
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
                  <TextField.Root
                    placeholder="Title"
                    {...field}
                    data-test="title-input"
                  />
                )}
              />
              <Text color="red" size="1" mt="1" data-test="title-error-message">
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
                    <Select.Trigger
                      placeholder="Select an author"
                      data-test="open-select-button"
                    />

                    <Select.Content>
                      {authors.map((item, index) => (
                        <Select.Item
                          data-test="select"
                          key={index}
                          value={item.id}>
                          {item.fullName}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                )}
              />
              <Text
                as="div"
                color="red"
                size="1"
                mt="1"
                data-test="author-error-message">
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
                  <TextField.Root
                    placeholder="Publisher"
                    {...field}
                    data-test="publisher-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="publisher-error-message">
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
                  required: "Year of publication required",
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
                    data-test="year-of-publication-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="year-of-publication-error-message">
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
                  <TextField.Root
                    placeholder="Language"
                    {...field}
                    data-test="language-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="language-error-message">
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
                  <TextField.Root
                    type="number"
                    placeholder="1"
                    {...field}
                    data-test="number-of-pages-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="number-of-pages-error-message">
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
                  <TextField.Root
                    placeholder="Category"
                    {...field}
                    data-test="category-book-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="category-book-error-message">
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
                    data-test="synopsis-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="synopsis-error-message">
                {errors.synopsis?.message}
              </Text>
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
                onClick={() => reset()}
                data-test="close-modal-button">
                Cancel
              </Button>
            </Dialog.Close>

            <Button type="submit" data-test="submit-button">
              Save
            </Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
