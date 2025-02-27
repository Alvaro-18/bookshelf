import {useContext, useState} from "react";
import {ActivityLogIcon, BookmarkIcon, PersonIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";
import {ThemeContext} from "../../contexts/ThemeContext";
import {Header, Nav, Container, Main, Footer} from "./Index.styles";
import {ThemeToggle} from "../../components/UI/ThemeToggle/Index";
import {BookTableView} from "../../components/BookTableView/Index";

export const HomePage = () => {
  const {theme, switchTheme} = useContext(ThemeContext);
  const [tabState, setTabState] = useState({
    name: "Book",
  });

  return (
    <Container>
      <Header>
        <h1>
          <ActivityLogIcon width={24} height={24} /> {tabState.name} List
        </h1>
        <Nav>
          <Button
            onClick={() => setTabState({name: "Book"})}
            variant={tabState.name == "Book" ? "solid" : "outline"}
            color={tabState.name == "Book" ? "brown" : "gray"}
            radius="large">
            <BookmarkIcon /> Books
          </Button>
          <Button
            onClick={() => setTabState({name: "Author"})}
            variant={tabState.name == "Author" ? "solid" : "outline"}
            color={tabState.name == "Author" ? "green" : "gray"}
            radius="large">
            <PersonIcon /> Authors
          </Button>
        </Nav>
      </Header>
      <Main>
        <BookTableView />
      </Main>
      <Footer>
        <ThemeToggle theme={theme} switchThemeFunction={switchTheme} />
      </Footer>
    </Container>
  );
};
