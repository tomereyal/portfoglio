import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import TopSection from "./topSection";
import ProjectsSection from "./projectsSection";
import TechSection from "./techSection";
import AboutMeSection from "./aboutMeSection";
//@ts-ignore
import video from "../../../assests/space.mp4";
const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
overflow-hidden
    
  `}
`;
const HeroBackground = styled.div`
  ${tw`
absolute
top-0
bottom-0
right-0
left-0
w-full
h-full
overflow-hidden
`}
`;

const VideoBg: any = styled.video`
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  position: fixed;
  z-index: -100;
  ${tw`
w-full
h-full
`}
`;

export default function HomePage() {
  return (
    <PageContainer id={"homePage"}>
      <HeroBackground>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBackground>

      <TopSection />
      <ProjectsSection />
      <TechSection />
      <AboutMeSection />
    </PageContainer>
  );
}
