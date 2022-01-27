import React, { useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Pixel1 from "../../../assests/images/pixel1.png";
import Pixel2 from "../../../assests/images/pixel2.jpeg";
import Button from "../../components/button";
import Sidebar from "../../components/sidebar";
import { useTheme, useThemeUpdate } from "../../ThemeContext";

import SideText from "../../components/sideText";
import { useInViewport } from "react-in-viewport";

const MainContainer = styled.div`
  /* background-color: #0c0c0c; */
  ${tw`
flex
justify-center
items-center
py-0
px-7
min-h-screen
relative
w-full
`}
`;

const TopSectionContainer = styled.div`
  min-height: 400px;
  /* margin-top: 6em; */
  z-index: 1;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-col
    justify-center
    items-center
    px-3
    lg:px-12
    md:flex-row
    md:justify-between
  `};
  scroll-snap-align: center;
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    justify-center
    items-center
    relative
    p-2

    mt-5
    md:mt-20
    md:p-12

  `};
`;

const GlassBackground = styled.div`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(74, 74, 78, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;

  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-xl
    text-center
    sm:text-2xl
    md:text-5xl
    xl:text-6xl
    lg:font-black
    md:font-extrabold
    text-white
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
  text-center
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-white
  `};
`;

const StandAloneImage = styled.img`
  width: auto;
  height: 70%;
  border-radius: 10px;
`;

const ButtonsContainer = styled.div`
  ${tw`
flex
mt-4
flex-wrap
justify-center
items-center
`}
`;

export default function TopSection() {
  const toggleDarkTheme = useThemeUpdate();
  const darkTheme = useTheme();
  const onEnterViewport = () => {
    if (!darkTheme) {
      toggleDarkTheme();
    }
  };
  const onLeaveViewport = () => {};

  const containerRef = useRef();
  const { inViewport } = useInViewport(
    containerRef,
    {},
    { disconnectOnLeave: false },
    { onEnterViewport, onLeaveViewport }
  );

  return (
    <MainContainer id="top">
      <SideText />
      <TopSectionContainer>
        <LeftContainer>
          <Slogan>Welcome, I'm Tomer Eyal. </Slogan>
          <GlassBackground>
            <Description>Full Stack Developer </Description>
          </GlassBackground>
          <ButtonsContainer>
            <Button theme="outlined" text="Enter" textColor={"white"} />
          </ButtonsContainer>
        </LeftContainer>

        <RightContainer>
          {/* <BlobContainer>
            <img src={BlobImg} />
          </BlobContainer> */}
          <StandAloneImage src={Pixel1}></StandAloneImage>
          {/* <ResponsiveText style={{ color: "white" }}>
          </ResponsiveText> */}
        </RightContainer>
      </TopSectionContainer>
      {/* <HeroBackground>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBackground> */}
      <Sidebar />
    </MainContainer>
  );
}
