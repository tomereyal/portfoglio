import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { technologies } from "../../app-config/technologies";
import { useInViewport } from "react-in-viewport";
import { ISectionProps } from "../../../typings/section.js";
import { SCREENS } from "../../components/responsive";
import { useTheme, useThemeUpdate } from "../../ThemeContext";
import GridBox from "../../components/gridBox";
import { clientSideTechs } from "../../app-config/technologies";
import { serverSideTechs } from "../../app-config/technologies";
import { dataBaseTechs } from "../../app-config/technologies";
import { developmentTechs } from "../../app-config/technologies";
import planetOut from "../../../assests/images/planet-out.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faRocket,
  faSatelliteDish,
  faServer,
  faTabletAlt,
} from "@fortawesome/free-solid-svg-icons";

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
  background-color: #daf0f5;
  ${tw`
   w-full
    min-h-screen
    max-h-screen
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    pt-10
    pb-10
    md:pl-28
    md:pr-28 
    md:pb-5
    bg-gradient-to-b from-white to-blue-200
`}

  background: url(${planetOut});
  background-size: cover;
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
  flex-direction: column;

  ${tw`
w-3/4

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

const TechMissile = styled.div<{ position: number; inViewPort: boolean }>`
  height: max-content;
  opacity: 0;
  transform: opacity 1s linear;
  will-change: opacity box-shadow transform;
  ${tw`
border
my-2
w-3/4
md:w-3/4
overflow-hidden
flex
justify-between
md:h-20
`}
  border-radius: 20px 50px 50px 20px;

  animation: ${({ inViewPort }) => (inViewPort ? rocketFire : "")} 1s linear 1;
  animation-duration: ${({ position }) => 1 - position * 0.1 + `s`};
  animation-fill-mode: forwards;
  @media (min-width: ${SCREENS.md}) {
    margin-left: ${({ position }) => position * 15 + "%"};
  }
`;

const RocketHead = styled.div`
  border-left: 1px solid #7e5d7eeb;
  border-left: none;
  color: #f85ef88d;
  ${tw`
  flex
  justify-center
  items-center
  rounded-r-full
  p-7
  text-xl
`};

  @media (min-width: ${SCREENS.md}) {
    box-shadow: inset -5px 0px 4px 1px #ff00ff52;
  }
`;

const Spacer = styled.div`
  margin-left: auto;
`;

const BlocksContainer = styled.div`
  background-color: #ffffffeb;
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  w-full
  md:flex-row
  `}
`;

const TechBlock = styled.div`
  border-bottom: 1px solid #00000049;

  ${tw`
  h-full
   p-1
   flex
   flex-row-reverse
   md:flex-col
   justify-center
w-full
    items-center
  `}

  @media (min-width: ${SCREENS.md}) {
    border-right: 1px solid #00000049;
    border-bottom: none;
  }

  span {
    ${tw`
   text-gray-600
    mb-1
    ml-1  
    text-xs
    font-bold
    `}
  }

  img {
    ${tw`
    w-5
    md:w-10
    `}
  }
`;
////////////////////////////////////////////////////////

export default function TechSection() {
  const toggleDarkTheme = useThemeUpdate();
  const darkTheme = useTheme();

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
          <TechMissile key={t.type} position={index} inViewPort={inViewport}>
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
