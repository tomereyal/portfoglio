import React, { useRef, useState } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import styled from "styled-components";
import tw from "twin.macro";
import { ISectionProps } from "../../../typings/section";
import { useInViewport } from "react-in-viewport";

import ContactSection from "./contactSection";
import { useThemeUpdate } from "../../ThemeContext";
import { useTheme } from "../../ThemeContext";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

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
`}

  scroll-snap-align: center;
`;

interface ISlideProps {
  index?: number;
}
const Slide = styled.div<ISlideProps>`
  ${tw`
    flex
    flex-wrap
    items-center
    justify-center
rounded-md
`}
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    items-center
    justify-center
    md:ml-6
    2xl:ml-16
bg-red-300
    py-5
  rounded-lg
  `};
`;

interface IInfoProps {
  color?: string;
}

const InfoTitle = styled.h1<IInfoProps>`
  ${tw`
    text-white
    text-xl
    sm:text-xl
    md:text-2xl
    lg:text-4xl
    font-extrabold
    md:font-black
    md:leading-normal

  `};
  span {
    color: ${({ color }) => {
      return color;
    }};
  }
`;

const InfoText = styled.p`
  ${tw`
  flex
  justify-center
  

  items-center
    md:max-w-2xl
    text-sm
    md:text-base
    text-white
    font-normal
    mt-4
    px-14

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

const slides = [
  {
    title: "2+ Years",
    subtitle: "experience",
    color: "#6449c7",
    description: `I have been immersing myself daily in the web development field, through a year-long bootcamp at John Bryce College and independently with the help of online videos and a lot of Google searches \u{1F605}. 
    I am constantly aiming to produce the most efficient code & provide creative solutions. `,

    image: "",
    emoji: `\u{1F4BB}`,
  },
  {
    title: "3 Years",
    subtitle: " Med School",
    color: "#40cf94",

    description: `After completing the army, I was fortunate enough to get accepted to the International Medical School of Milan.
     However, after attending rounds at the hospital I could say I was also fortunate enough to understand that life as a M.D. is not for me \u{1F637}.
    I am still vastly curious and passionate about the human body. I'd like to think that in the future I could somehow incorporate that knowledge with computer programming. \u{1f9ec}`,
    image: "",
    emoji: `\u{1F3E3}`,
  },
  {
    title: "C.s at ",
    subtitle: "Open University",
    color: "#27a4ad",
    description:
      "I currently study computer science at the open university \u{1f393}. I recommend it to anyone who can effectively self-manage during independent projects. I believe combining my practicality with university-taught programming principles will help me advance even further as programmer!",

    emoji: `\u{1f4da}`,
  },
  {
    title: "I Love To ",
    subtitle: "Team Up",
    color: "#27a4ad",
    description:
      "I tend to be happier around people and I thrive in diversity.",
    emoji: `\u{1f9d1}\u{1f308}`,
  },
  {
    title: "Native",
    subtitle: "English Speaker",
    color: "#27a4ad",
    description:
      "I grew up in the states and came to Israel at the age of 14. I can now manage to speak Hebrew,English and Italian fluently and maybe even Mandarin one day \u{1f22f}!",
    emoji: `\u{1f3c8}`,
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
      <Slider
        autoplay={5000}
        nextButton={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
        previousButton={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
        classNames={{
          slider: "slider",
          nextButton: "nextButton",
          prevButton: "prevButton",
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} index={index}>
            <InfoContainer>
              <InfoTitle color={slide.color}>
                {slide.title}{" "}
                <span>
                  {slide.subtitle}
                  <span>{slide.emoji}</span>
                </span>
              </InfoTitle>
              <InfoText>{slide.description}</InfoText>
            </InfoContainer>
          </Slide>
        ))}
      </Slider>
      <ButtonsContainer>
        <ContactSection />
      </ButtonsContainer>
    </MainContainer>
  );
}
