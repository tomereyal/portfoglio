import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import BlobImg from "../../../assests/images/blob.svg";

export const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    pt-10
    w-full
min-h-screen
    items-center
    bg-gray-900
  `}
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

export const Toolbar = styled.div`
  ${tw`
  relative
  flex
  w-full
  
  p-7
  justify-center
  items-center
  `}
`;

export const ToolbarLayer2 = styled.div`
  ${tw`
  absolute
  top-0
  bottom-0
  left-6
  flex
  justify-center
  items-center
  md:left-6
  `}
`;

export const SectionFlexCol = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    items-center
    py-4
  `}
`;

export const ProjectTitle = styled.h2`
  color: white;
  ${tw`
  flex
  justify-center
  items-center
  text-3xl
`};
`;

export const CoverPhoto = styled.div`
  ${tw`
  w-3/4
  rounded-2xl
  flex
  justify-center
  items-center
  `}
  img {
    ${tw`
    w-2/4
    h-auto
    rounded-lg
    `}
  }
`;

export const StacksContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    
  `};
`;

export const Stack = styled.p`
  ${tw`
    text-gray-300
    text-xs
    font-bold
    ml-2
    mr-2
  `};
`;

export const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

export const ProjectDescription = styled.p`
  word-wrap: normal;
  text-align: center;
  ${tw`
    text-gray-200
    pr-3
    pl-3
`};
`;

export const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

export const ButtonsContainer = styled.div`
  ${tw`
    min-w-full
    mt-2
    flex 
    justify-center 
    items-center
    pl-10
    pr-10
  `};
`;

export const ColoredText = styled.span`
  ${tw`
text-yellow-500

`}
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  ${tw`
  my-3
  w-1/2
  p-4
    bg-white
  `}
`;

export const SectionTitle = styled.h3`
  ${tw`
  text-2xl
text-white
`}
`;
export const FeatureTitle = styled.div`
  ${tw`
  text-xl
  text-center
  mb-3
`}
`;
