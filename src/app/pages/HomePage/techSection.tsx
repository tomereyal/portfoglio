import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { technologies } from "../../app-config/technologies";
import { useInViewport } from "react-in-viewport";
import { ISectionProps } from "../../../typings/section.js";
import { SCREENS } from "../../components/responsive";
import { useTheme, useThemeUpdate } from "../../ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//=============ANIMATIONS===========================
const bouncing = keyframes` 

  50% {transform: translateY(-7px);}
  `;

//=====================================

const MainContainer = styled.div<ISectionProps>`
  /* opacity: ${({ inViewport = true }) => (inViewport ? 1 : 0)};
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1s; */
  ${tw`
   w-full
    min-h-screen
    max-h-screen
    flex
    flex-col
    items-center
    justify-center
    px-4
    py-10
    md:px-28
    md:pb-5
`}

  scroll-snap-align: center;
`;

const Title = styled.h2`
  ${tw`
    text-2xl
    lg:text-4xl
    text-white
    font-extrabold
  
`}
`;

const Description = styled.p`
  ${tw`
text-gray-300

font-bold
 mb-3
 text-center
`}
`;

const FlowContainer = styled.div`
  display: flex;

  ${tw`
  w-full
md:w-3/4

`}
`;

const glowWidth = 5;
const glowBlur = 10;
const glowBlurAdd = 60;
const glowRight = -150;

const rocketFire = keyframes`
  0%{
    transform:translateX(-100%) ;
    box-shadow: ${glowRight}px 0 ${glowBlur}px ${glowWidth}px #a04c4c
  }
  100%{
    opacity: 1;
    transform:translateX(0) ;
    box-shadow: -3px 0px 3px 3px #e984db;
  
  }
`;

const TechMissile = styled.div<{ position: number; isScolledOnce: boolean }>`
  height: max-content;
  opacity: 0;
  transform: opacity 1s linear;
  will-change: opacity box-shadow transform;
  ${tw`
my-2
ml-1
md:ml-3
w-full
overflow-hidden
flex
flex-col
justify-between
`}
  border-radius: 20px 20px 50px 20px;

  animation: ${({ isScolledOnce }) => (isScolledOnce ? rocketFire : "")} 1s
    linear 1;
  animation-duration: ${({ position }) => 1 - position * 0.1 + `s`};
  animation-fill-mode: forwards;
  /* @media (min-width: ${SCREENS.md}) {
    margin-left: ${({ position }) => position * 2 + "%"};
  } */
`;

const RocketHead = styled.div`
  border-left: 1px solid #7e5d7eeb;
  border-left: none;
  color: #f85ef88d;
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  p-3
  md:p-7
  text-xl
  md:flex-row
`};

  span {
    font-size: 8px;
    ${tw`
  ml-1
    md:text-sm
  `}
  }

  @media (min-width: ${SCREENS.md}) {
    box-shadow: inset -5px 0px 4px 1px #ff00ff52;
  }
`;

const Spacer = styled.div`
  margin-left: auto;
`;

const BlocksContainer = styled.div`
  background-color: #a13e947d;
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  w-full
  `}
`;

const TechBlock = styled.div`
  border-bottom: 1px solid #00000049;
  font-size: 8px;
  ${tw`
  h-full
   p-1
   flex
   flex-row-reverse
   justify-end
w-full
    items-center
  `}

  @media (min-width: ${SCREENS.md}) {
    border-right: 1px solid #00000049;
    border-bottom: none;
  }

  span {
    ${tw`
   text-gray-300
    mb-1
    ml-1  
    md:text-sm
    `}
  }

  img {
    ${tw`
   w-3
    md:w-4
    `}
  }
`;
////////////////////////////////////////////////////////

export default function TechSection() {
  const toggleDarkTheme = useThemeUpdate();
  const darkTheme = useTheme();
  const [isScolledOnce, setIsScrolledOnce] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     console.log("e", e);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", (e) => {
  //       console.log("e", e);
  //     });
  //   };
  // }, []);

  const onEnterViewport = () => {
    if (darkTheme) {
      toggleDarkTheme();
    }
    setIsScrolledOnce(true);
  };
  const onLeaveViewport = () => {};

  const containerRef = useRef();
  const { inViewport } = useInViewport(
    containerRef,
    { threshold: 0.75 },
    { disconnectOnLeave: true },
    { onEnterViewport, onLeaveViewport }
  );

  return (
    <MainContainer
      ref={containerRef}
      inViewport={inViewport}
      id={"techSection"}
    >
      <Title>Technologies</Title>
      <Description>And the list is still growing!</Description>

      <FlowContainer>
        {technologies.map((t, index) => (
          <TechMissile
            key={t.type}
            position={index}
            isScolledOnce={isScolledOnce}
          >
            <BlocksContainer>
              {t.content.map(({ logo, name }) => (
                <TechBlock key={name}>
                  <span> {name}</span>
                  <img src={logo}></img>
                </TechBlock>
              ))}
            </BlocksContainer>

            <Spacer />
            <RocketHead>
              <FontAwesomeIcon icon={t.logo}></FontAwesomeIcon>
              <span>{t.type}</span>
            </RocketHead>
          </TechMissile>
        ))}
      </FlowContainer>
      {/* <TechsContainer >
        <GridBox childrenPerRow={2}>{techColumns(inViewport)}</GridBox>
      </TechsContainer> */}
    </MainContainer>
  );
}
