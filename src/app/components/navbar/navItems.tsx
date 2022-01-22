import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { Modal } from "react-responsive-modal";
import ContactSection from "../../pages/HomePage/contactSection";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";
const ListContainer = styled.ul`
  ${tw`flex list-none`}
`;
const NavItem = styled.li<{ menu?: any; fontColor?: string }>`
  ${tw`
  
text-sm
 md:text-base
  mr-1 
  md:mr-5 
  cursor-pointer 
  transition 
  duration-300
  ease-in-out
  hover:text-gray-700
  font-bold
  `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw` 
      text-white
      text-xl
      mb-3
      focus:text-white
`}
    `};
`;

export default function NavItems() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const navItems = (
    <ListContainer>
      <NavItem menu={isMobile ? true : false}>
        <NavHashLink
          to={"/#projects"}
          smooth
          activeClassName="selected"
          activeStyle={{ fontWeight: "bolder" }}
        >
          Projects
        </NavHashLink>
      </NavItem>
      <NavItem menu={isMobile ? true : false}>
        <NavHashLink
          to={"/#techSection"}
          smooth
          activeClassName="selected"
          activeStyle={{ fontWeight: "bolder" }}
        >
          Technologies
        </NavHashLink>
      </NavItem>

      <NavItem menu={isMobile ? true : false}>
        <NavHashLink
          to={"/#aboutMe"}
          smooth
          activeClassName="selected"
          activeStyle={{ fontWeight: "bolder" }}
        >
          Contact
        </NavHashLink>
      </NavItem>
    </ListContainer>
  );

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        {navItems}
      </Menu>
    );

  return navItems;
}
