import React, { useState, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import MoonLoader from "react-spinners/MoonLoader";
import Project from "../../components/project";
import { projects } from "../../app-config/projects";
import { useInViewport } from "react-in-viewport";
import { ISectionProps } from "../../../typings/section.js";
import { useTheme, useThemeUpdate } from "../../ThemeContext";

const MainContainer = styled.div`
  scroll-snap-align: center;
  ${tw`
   w-full
   min-h-screen
    flex
    flex-col
    items-center
    justify-center
 
    pt-10
    pb-14

    md:pb-5
    
`}

  scroll-snap-align: center;

  padding-bottom: 100px;
`;

const Title = styled.h2`
  ${tw`
text-3xl
lg:text-5xl
text-white
font-extrabold
`}
`;

const ProjectsContainer = styled.div<ISectionProps>`
  /* opacity: ${({ inViewport = true }) => (inViewport ? 1 : 0)};
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1s; */
  ${tw`
w-full 
flex 
flex-wrap
justify-center
mt-20
md:mt-10
`}
`;

const EmptyProjects = styled.div`
  ${tw`
w-full
flex
items-center
justify-center
mt-7
md:mt-10
text-sm
text-gray-500
`}
`;

const LoadingContainer = styled.div`
  ${tw`
w-full
flex
items-center
justify-center
text-sm
text-black
mt-10
`}
`;

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

export default function ProjectsSection() {
  const [dotNumber, setDotNumber] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const [isLoading, setIsLoading] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const toggleDarkTheme = useThemeUpdate();
  const darkTheme = useTheme();
  const onEnterViewport = () => {
    console.log(`entered projects.. darkTheme`, darkTheme);
    if (!darkTheme) {
      toggleDarkTheme();
    }
    setOpacity(1);
  };
  const onLeaveViewport = () => {
    setOpacity(0);
  };

  const containerRef = useRef();

  const { inViewport } = useInViewport(
    containerRef,
    { threshold: 0.5 },
    { disconnectOnLeave: false },
    { onEnterViewport, onLeaveViewport }
  );
  const projectElements = (inViewport: boolean) => {
    return (
      projects.map((project, index) => (
        <Project
          {...project}
          inViewport={inViewport}
          index={index}
          key={index + project.title}
        />
      )) || []
    );
  };

  const isEmptyProjects = !projects || projects.length === 0;

  const numberOfDots = isMobile
    ? projects.length
    : Math.ceil(projects.length / 3);
  return (
    <MainContainer id="projects">
      <Title>Projects</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {isEmptyProjects && !isLoading && (
        <EmptyProjects>No Projects To Show..</EmptyProjects>
      )}
      {!isEmptyProjects && !isLoading && (
        <ProjectsContainer ref={containerRef} inViewport={inViewport}>
          <Carousel
            value={dotNumber}
            onChange={setDotNumber}
            //@ts-ignore
            slides={projectElements(inViewport)}
            plugins={[
              "clickToChange",
              { resolve: slidesToShowPlugin, options: { numberOfSlides: 3 } },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: { numberOfSlides: 1 },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: { numberOfSlides: 2 },
                  },
                ],
              },
            }}
          />
          <Dots
            value={dotNumber}
            onChange={setDotNumber}
            number={numberOfDots}
          />
        </ProjectsContainer>
      )}
    </MainContainer>
  );
}
