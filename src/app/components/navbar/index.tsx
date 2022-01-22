import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import NavItems from "./navItems";
import { useTheme } from "../../ThemeContext";

const NavbarContainer = styled.div<{ darkTheme: boolean }>`
  min-height: 55px;
  position: fixed;
  top: 0;
  ${tw`
    w-full 
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    z-20
`};
  color: ${({ darkTheme }) => (darkTheme ? "white" : "black")};
  /* border-bottom: ${({ darkTheme }) =>
    darkTheme ? "white" : "1px solid black"}; */
  background-color: ${({ darkTheme }) =>
    darkTheme ? "transparent" : "#f8f5f57f"};
  box-shadow: ${({ darkTheme }) => (darkTheme ? "" : "0px 2px 4px grey")}; ;
`;

const LogoContainer = styled.div``;

export default function Navbar(props: any) {
  // const darkTheme = useTheme();
  return (
    <NavbarContainer darkTheme={true}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
