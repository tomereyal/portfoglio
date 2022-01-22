import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";
interface ILogoProps {
  color?: "white" | "dark";
}

const LogoContainer = styled.a`
  ${tw`flex items-center `}
`;

const LogoText = styled.div`
  ${tw`text-xl 
  md:text-2xl 
  font-bold 
   m-1
   `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

export default function Logo(props: ILogoProps) {
  return (
    <NavHashLink
      to={"/#top"}
      smooth
      activeClassName="selected"
      activeStyle={{ fontWeight: "bolder" }}
    >
      <LogoContainer>
        <Icon>
          <FontAwesomeIcon icon={faTree}></FontAwesomeIcon>
        </Icon>
        <LogoText>Home</LogoText>
      </LogoContainer>
    </NavHashLink>
  );
}
