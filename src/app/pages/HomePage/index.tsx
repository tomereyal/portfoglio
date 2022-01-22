import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import TopSection from "./topSection";
import { Marginer } from "../../components/marginer";
import ProjectsSection from "./projectsSection";
import TechSection from "./techSection";
import AboutMeSection from "./aboutMeSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    
  `}
  overflow-y: scroll;
  /* scroll-behavior: smooth;
  scroll-snap-type: y mandatory; */
`;
export default function HomePage() {
  return (
    <PageContainer id={"homePage"}>
      {/* <Marginer direction="vertical" margin="4em" /> */}
      <TopSection />
      <ProjectsSection />
      <TechSection />
      <AboutMeSection />
    </PageContainer>
  );
}
