import {
  Button,
  Dialog,
  Flex,
  Text,
  TextField,
  TextArea,
} from "@radix-ui/themes";
import {useContext} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {UserContext} from "../../../../contexts/UserContext";
import {Pencil1Icon} from "@radix-ui/react-icons";
import {Author} from "../../../../types/author.type";

export const SetAuthorForm = ({data}: {data?: Author}) => {
  const {setAuthor, addAuthorCategory} = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: data || {
      id: "",
      fullName: "",
      biography: "",
      dateOfBirth: "",
      nationality: "",
      category: "",
      menu: true,
    },
  });

  const validateDateOfBirth = (dateOfBirth: string | undefined) => {
    if (!dateOfBirth) {
      return "Date of birth is required";
    }

    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (age < 6 || (age === 6 && monthDiff < 0)) {
      return "Author must be at least 6 years old";
    }

    return true;
  };

  const onSubmit: SubmitHandler<Author> = author => {
    if(!data) {
      setAuthor({...author, id: crypto.randomUUID()});
    } else {
      setAuthor(author)
    }
    if (author.category) {
      addAuthorCategory(author.category);
    }
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
            Add new Author +
          </Button>
        )}
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add new Author +</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Fill in the inputs
        </Dialog.Description>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Full Name
              </Text>
              <Controller
                name="fullName"
                control={control}
                rules={{required: "Full name required"}}
                render={({field}) => (
                  <TextField.Root
                    placeholder="Full name"
                    {...field}
                    data-test="full-name-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="full-name-error-message">
                {errors.fullName?.message}
              </Text>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Biography
              </Text>
              <Controller
                name="biography"
                control={control}
                rules={{required: "Biography required"}}
                render={({field}) => (
                  <TextArea
                    resize={"none"}
                    placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis distinctio omnis modi"
                    {...field}
                    data-test="biography-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="biography-error-message">
                {errors.biography?.message}
              </Text>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Date of birth
              </Text>
              <Controller
                name="dateOfBirth"
                control={control}
                rules={{
                  required: "Date of birth required",
                  validate: validateDateOfBirth,
                }}
                render={({field}) => (
                  <TextField.Root
                    type="date"
                    placeholder="mm-dd-yyy"
                    {...field}
                    data-test="date-of-birth-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="date-of-birth-error-message">
                {errors.dateOfBirth?.message}
              </Text>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nationality
              </Text>
              <Controller
                name="nationality"
                control={control}
                rules={{required: "Nationality required"}}
                render={({field}) => (
                  <TextField.Root
                    placeholder="nationality"
                    {...field}
                    data-test="nationality-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="nationality-error-message">
                {errors.nationality?.message}
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
                    placeholder="category"
                    {...field}
                    data-test="category-author-input"
                  />
                )}
              />
              <Text
                color="red"
                size="1"
                mt="1"
                data-test="category-author-error-message">
                {errors.category?.message}
              </Text>
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray" onClick={() => reset()}  data-test="close-modal-button">
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
