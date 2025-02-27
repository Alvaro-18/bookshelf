import {
  ThemeToggleContainer,
  Label,
  RelativeWrapper,
  HiddenCheckbox,
  Background,
  Dot,
  SunIcon,
  MoonIcon,
} from "./Index.styles";

export const ThemeToggle = ({
  theme,
  switchThemeFunction,
}: {
  theme: string;
  switchThemeFunction: () => void;
}) => {
  return (
    <ThemeToggleContainer>
      <Label htmlFor="theme-toggle">
        <RelativeWrapper>
          <HiddenCheckbox
            id="theme-toggle"
            checked={theme === "dark"}
            onChange={switchThemeFunction}
          />
          <Background theme={theme} />
          <Dot theme={theme}>
            {theme === "dark" ? (
              <MoonIcon
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#878787" />
                <circle cx="15" cy="15" r="10" fill="#4A5A69" />
                <circle cx="12" cy="15" r="9" fill="#878787" />
              </MoonIcon>
            ) : (
              <SunIcon
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#F3F3F3" />
                <circle
                  cx="15"
                  cy="15"
                  r="5.5"
                  fill="#F7C224"
                  stroke="#F7C224"
                />
                <line
                  x1="15"
                  y1="8"
                  x2="15"
                  y2="4"
                  stroke="#F7C224"
                  strokeWidth="2"
                />
                <line
                  x1="15"
                  y1="26"
                  x2="15"
                  y2="22"
                  stroke="#F7C224"
                  strokeWidth="2"
                />
                <line
                  x1="22"
                  y1="15"
                  x2="26"
                  y2="15"
                  stroke="#F7C224"
                  strokeWidth="2"
                />
                <line
                  x1="8"
                  y1="15"
                  x2="4"
                  y2="15"
                  stroke="#F7C224"
                  strokeWidth="2"
                />
                <line
                  x1="23.5355"
                  y1="6.70711"
                  x2="20.707"
                  y2="9.53553"
                  stroke="#F7C224"
                  strokeWidth="2"
                />
                <line
                  x1="9.53548"
                  y1="20.7071"
                  x2="6.70705"
                  y2="23.5355"
                  stroke="#F7C224"
                  strokeWidth="2"
                />
                <line
                  x1="9.36278"
                  y1="9.37892"
                  x2="6.34394"
                  y2="6.75468"
                  stroke="#F7C224"
                  strokeWidth="2"
                />
                <line
                  x1="20.7071"
                  y1="20.2929"
                  x2="23.5355"
                  y2="23.1213"
                  stroke="#F7C224"
                  strokeWidth="2"
                />
              </SunIcon>
            )}
          </Dot>
        </RelativeWrapper>
      </Label>
    </ThemeToggleContainer>
  );
};
