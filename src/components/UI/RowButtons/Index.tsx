import {Flex} from "@radix-ui/themes";
import {DeleteButton} from "./DeleteButton/Index";
import {MoreInfoButton} from "./MoreInfoButtons/Index";
import {Book} from "../../../types/book.type";
import {SetBookForm} from "../../TableView/Forms/SetBookForm/Index";
import {useContext} from "react";
import {UserContext} from "../../../contexts/UserContext";
import {Author} from "../../../types/author.type";
import {SetAuthorForm} from "../../TableView/Forms/SetAuthorForm/Index";

export const RowButtons = ({data}: {data: Book | Author}) => {
  const {deleteBook, deleteAuthor} = useContext(UserContext);

  const onClick = () => {
    if ("title" in data) {
      deleteBook(data.id);
    } 
    if("fullName" in data) {
      deleteAuthor(data.id)
    }
  };

  return (
    <Flex gap={"2"}>
      {
        "fullName" in data ? (
          <SetAuthorForm data={data as Author} />
        ) : (
          <SetBookForm data={data as Book} />
        )
      }
      <DeleteButton onClick={onClick} />
      <MoreInfoButton data={data} />
    </Flex>
  );
};
