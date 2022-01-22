import React from "react";
//----myCOMPONENTS-------------------------------
import Button from "../button";
//----INSTALLED-COMPONENTS-----------------------
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";
import { IProject } from "../../../typings/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SCREENS } from "../responsive";
//-----------------------------------------------
import blueSphere from "../../../assests/images/blueSphere.png";
import { useHistory } from "react-router-dom";

export interface IPropsProject extends IProject {
  inViewport?: boolean;
  index?: number;
}

//=============ANIMATIONS===========================
const bouncing = keyframes` 

  50% {transform: translateY(-15px)}
  `;

const resizeShadow = keyframes` 
 50% {
      background-size: 50%;}
  `;

const bounceAndResizeShadow = keyframes` 
50% {
    transform: translateY(-5px);
    background-size: 40%;}
`;
//=====================================

interface IMainContainer {
  inViewport?: boolean;
}

const MainContainer = styled.div<IMainContainer>`
  width: 15.5em;
  min-height: 25em;
  max-height: 25em;
  ${tw`
    sm:m-2
    md:m-6
  `};
  @media (min-width: ${SCREENS.md}) {
    width: 18.5em;
  }
`;

interface IProjectContainer {
  index?: number;
  inViewport?: boolean;
}

const ProjectContainer = styled.div<IProjectContainer>`
  ${tw`
   w-full
   h-full
   flex
    flex-col
    items-center
    p-3
    pb-4
    rounded-md
    m-1
    cursor-move
  `};
`;

interface IShadowContainer {
  index?: number;
  inViewport?: boolean;
}
const ShadowContainer = styled.div<IShadowContainer>`
  background-image: url("https://static.trendme.net/pictures/items/shadow-round_Lights-stardustnf-full-35014-648294.png");
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: 55%;
  animation: ${({ inViewport }) => (inViewport ? resizeShadow : "")}
    ${({ index = 0 }) => 3 + index}s ease-in-out 800ms infinite;
  ${tw`
absolute
top-0
left-0
bottom-0
right-0
  `};
  transform: translateY(20px);
`;

interface IOvalProject {
  index?: number;
  inViewport?: boolean;
  size?: number;
  color?: string;
}
const OvalProject = styled.div<IOvalProject>`
  animation: ${({ inViewport }) => (inViewport ? bouncing : "")}
    ${({ index = 0 }) => 3 + index}s ease-in-out 0.4s infinite;

  ${tw`
    flex
    flex-col
    items-center
    w-full
    p-3
    pb-4
    rounded-md
    m-1
    sm:m-3
    md:m-6
    overflow-hidden
    cursor-pointer
  `};
  height: ${({ size = 20 }) => size}em;
  width: ${({ size = 20 }) => size}em;
  box-shadow: 0 1.3px 6px -2px rgba(0, 0, 0, 0.4);
  background-image: url(${blueSphere});
  background-position: 60% 35%;
  border-radius: 50%;
  background-size: 125%;
  background-color: ${({ color }) => color};
  background-blend-mode: multiply;
  &&:hover {
    background-color: rgba(249, 240, 255, 0.5);
    box-shadow: 0 1.3px 20px -2px rgba(252, 249, 249, 0.883);
  }
`;

const ProjectThumbnail = styled.div`
  width: 60%;
  height: 40%;
  margin: 0 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    ${tw`
    mt-5
    
    
    `}
  }
`;

const ProjectTitle = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-6
    mb-1
    font-mono
  `};
`;

export default function Project(props: IPropsProject) {
  const {
    title,
    description,
    stacks,
    thumbnail,
    link,
    path,
    inViewport,
    index = 0,
  } = props;

  const history = useHistory();
  const colorArr = ["rgba(207, 183, 223, 0.5)", "rgba(110, 246, 239, 0.5)"];

  const onButtonClick = (url: string) => {
    return () => {
      window.open(url);
    };
  };
  const goToProject = () => {
    if (path) history.push(path);
  };

  return (
    <MainContainer inViewport={inViewport}>
      <ProjectContainer index={index} inViewport={inViewport}>
        {/* <ShadowContainer></ShadowContainer> */}
        <OvalProject
          index={index}
          inViewport={inViewport}
          size={18}
          color={colorArr[index]}
          onClick={goToProject}
        >
          <ProjectThumbnail>
            <img src={thumbnail} alt="website" />
          </ProjectThumbnail>
          <ProjectTitle>{title}</ProjectTitle>
        </OvalProject>
      </ProjectContainer>
    </MainContainer>
  );
}

/* 

            
            <StacksContainer>
              {stacks && stacks.length
                ? stacks.map((stack) => <Stack>{stack}</Stack>)
                : ""}
            </StacksContainer>
            <Seperator />

            <ProjectDescription>
              {description ? description : "Not available"}
            </ProjectDescription>

            <ButtonsContainer>
              <Button
                onClick={onButtonClick("https://www.github.com")}
                shape="circle"
                theme="filled"
                bgc="green"
                text="Code"
              />
              <Button
                shape="circle"
                text="App"
                onClick={onButtonClick("https://www.facebook.com")}
              />
            </ButtonsContainer> */
