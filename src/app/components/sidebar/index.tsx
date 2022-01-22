import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../button";

const SidebarContainer = styled.div`
  z-index: 1;
  height: 80%;
  ${tw`

w-10

`}
`;

const SideItemsContainer = styled.div`
  ${tw`
    flex 
    flex-col
    w-full
    h-1/4
    pt-10
    justify-between
    items-center
`}
`;

const SideItem = styled.span`
  ${tw`

cursor-pointer
flex 
items-center
justify-center
`}
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SideItemsContainer>
        <SideItem>
          <a href={"https://www.facebook.com/tomereyal1"} target={"_blank"}>
            <Button
              shape={"circle"}
              circleSize={30}
              textColor={"white"}
              icon={<FontAwesomeIcon icon={faFacebook} />}
            />
          </a>
        </SideItem>
        <SideItem>
          <a
            href={"https://www.instagram.com/tomereyal1/?hl=en"}
            target={"_blank"}
          >
            <Button
              shape={"circle"}
              circleSize={30}
              textColor={"white"}
              icon={<FontAwesomeIcon icon={faInstagram} />}
            />
          </a>
        </SideItem>
        <SideItem>
          <a
            href={
              "https://www.linkedin.com/in/tomer-eyal-a9a9bb189/?originalSubdomain=il"
            }
            target={"_blank"}
          >
            <Button
              shape={"circle"}
              circleSize={30}
              textColor={"white"}
              icon={<FontAwesomeIcon icon={faLinkedin} />}
            />
          </a>
        </SideItem>
      </SideItemsContainer>
    </SidebarContainer>
  );
}
