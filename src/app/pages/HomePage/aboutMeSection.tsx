import React, { useRef, useState } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import styled from "styled-components";
import tw from "twin.macro";
import { ISectionProps } from "../../../typings/section";
import { useInViewport } from "react-in-viewport";
import citybanner from "../../../assests/images/cityBanner.png";
import tomer1 from "../../../assests/images/tomer1.png";
import blob from "../../../assests/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import Button from "../../components/button";
//@ts-ignore
import tomersResume from "../../../assests/Tomer_Resume.pdf";
import ContactSection from "./contactSection";
import { useThemeUpdate } from "../../ThemeContext";
import { useTheme } from "../../ThemeContext";
import spaceship from "../../../assests/images/spaceship.png";

const MainContainer = styled.div<ISectionProps>`
  /* opacity: ${({ inViewport = true }) => (inViewport ? 1 : 0)};
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1s; */
  ${tw`
 
   w-full
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    relative
    bg-gradient-to-b from-blue-200 to-green-100
`}
  background: url(${spaceship});
  background-size: cover;

  scroll-snap-align: center;
`;

interface ISlideProps {
  index?: number;
}
const Slide = styled.div<ISlideProps>`
  ${tw`
   w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
bg-transparent
rounded-md

`}/* background-image: url(${citybanner});
  background-position-x: ${({ index = 0 }) => index * 100 + 100}%;
  background-size: cover; */
`;

const ImageContainer = styled.div`
  width: auto;
  /* height: 15em; */

  img {
    width: auto;
    ${tw`
    h-56
    md:h-full
    `}
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: 0;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
text-white

  `};
`;

interface IInfoProps {
  color?: string;
}

const InfoTitle = styled.h1<IInfoProps>`
  ${tw`
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
text-white

  `};
  span {
    color: ${({ color }) => {
      return color;
    }};
  }
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

const ButtonsContainer = styled.div`
  min-width: 140px;
  width: 80%;
  ${tw`
flex justify-around
items-center
mt-7
`};
`;

const ResumeContainer = styled.div`
  font-size: 14px;
  color: #328037;
  font-weight: 700;
  position: absolute;

  ${tw`
  top-12
  right-2
  p-6
  `}
`;

const slides = [
  {
    title: "I Love To",
    subtitle: "Create",
    color: "#6449c7",
    description: "I love to create apps that are both friendly and efficient. ",
    image: "",
  },
  {
    title: "I Love To",
    subtitle: "Learn",
    color: "#40cf94",

    description: `From being a med student, to learning how to produce music, and then discovering
     web development and computer Science, I can say that no matter the subject, I enjoy the learing process.
      `,
    image: "",
  },
  {
    title: "I Love To ",
    subtitle: "Team Up",
    color: "#27a4ad",
    description:
      "Growing up in the States, with Israeli roots and then again studying in an international university in Italy, really did make me appreciate diversity and how much can be accomplished when working as a team.",
  },
];

export default function AboutMeSection() {
  const toggleDarkTheme = useThemeUpdate();
  const darkTheme = useTheme();
  const onEnterViewport = () => {
    if (darkTheme) {
      toggleDarkTheme();
    }
  };
  const onLeaveViewport = () => {};

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const containerRef = useRef();
  const { inViewport } = useInViewport(
    containerRef,
    { rootMargin: "-100.0px" },
    { disconnectOnLeave: false },
    { onEnterViewport, onLeaveViewport }
  );

  return (
    <MainContainer ref={containerRef} inViewport={inViewport} id={"aboutMe"}>
      <Slider>
        {slides.map((slide, index) => (
          <Slide key={index} index={index}>
            {/* <BlobContainer>
              <img src={blob}></img>
            </BlobContainer> */}
            <ImageContainer>
              <img src={tomer1} />
            </ImageContainer>
            <InfoContainer>
              <InfoTitle color={slide.color}>
                {slide.title} <span>{slide.subtitle}</span>
              </InfoTitle>
              {/* <InfoSubtitle>{slide.subtitle}</InfoSubtitle> */}
              <InfoText>{slide.description}</InfoText>
            </InfoContainer>
          </Slide>
        ))}
      </Slider>
      <ButtonsContainer>
        {/* <Button
          text={"Contact Me"}
          theme="filled"
          bgc="#35853a"
          onClick={onOpenModal}
        /> */}
        {/* <Modal open={open} onClose={onCloseModal} center>
          <ContactSection />
        </Modal> */}
        {/*add phone icon and email icon  */}
        {/* <ContactDetail>
        <FontAwesomeIcon icon={faMobileAlt} />
          050-687-1440
        </ContactDetail>
        <ContactDetail> Tomereyal93@gmail.com</ContactDetail> */}
        <ContactSection />
        <ResumeContainer>
          <a href={tomersResume} target={"_blank"}>
            <Button text={"Resume"} theme="outlined" textColor="#35853a" />
          </a>
        </ResumeContainer>
      </ButtonsContainer>
    </MainContainer>
  );
}
