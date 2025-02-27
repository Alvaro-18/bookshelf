import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.main`
  min-height: 70%;
  margin-top: 20px;
  margin-bottom: 14px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;
