import styled from "styled-components";

interface ThemeToggleProps {
  theme: string;
}

export const ThemeToggleContainer = styled.div`
  width: fit-content;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const RelativeWrapper = styled.div`
  position: relative;
`;

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

export const Background = styled.div<ThemeToggleProps>`
  background-color: ${props =>
    props.theme === "dark" ? "#2d2d2d" : "#e0e0e0"};
  width: 4.375rem;
  height: 2.25rem;
  border-radius: 9999px;
`;

export const Dot = styled.div<ThemeToggleProps>`

  position: absolute;
  left: 0.375rem;
  top: 0.20rem; 
  background-color:background-color: ${props => (props.theme === "dark" ? "#2d2d2d" : "#e0e0e0")};
  width: 1.875rem; 
  height: 1.875rem; 
  border-radius: 9999px;
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.theme === "dark" ? "translateX(1.75rem)" : "none")};
`;

export const SunIcon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;

export const MoonIcon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;
