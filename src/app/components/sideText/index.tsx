import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const SideTextContainer = styled.div`
  z-index: 1;
  height: 80%;
  ${tw`
w-1/12


`}
`;

const SideTextItemContainer = styled.div`
  ${tw`
    flex 
    flex-col
    w-full
    h-full
    justify-around
    items-center
    relative
    
    overflow-hidden
`}
`;

const SideTextItem = styled.p`
  transform: rotate(270deg);
  width: max-content;
  letter-spacing: 2px;
  ${tw`
text-white
text-center
uppercase
text-xs
font-mono
sm:text-sm
md:text-lg



`}
`;

export default function sideText() {
  return (
    <SideTextContainer>
      <SideTextItemContainer>
        <SideTextItem>C.s Student</SideTextItem>
        <SideTextItem>Programmer</SideTextItem>
        <SideTextItem>Smiles A Lot</SideTextItem>
      </SideTextItemContainer>
    </SideTextContainer>
  );
}
