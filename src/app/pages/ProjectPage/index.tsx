import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { IProject } from "../../../typings/project";
import Button from "../../components/button";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
interface IProjectPage {
  project: IProject;
}

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    pt-10
    w-full
    h-full
    items-center
    bg-gray-900
  `}
`;

const Toolbar = styled.div`
  ${tw`
  relative
  flex
  w-full
  p-7
  justify-center
  items-center
  `}
`;

const ToolbarLayer2 = styled.div`
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

const BlockAContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    items-center
  
  `}
`;

const ProjectTitle = styled.h2`
  color: white;
  ${tw`
  flex
  justify-center
  items-center
  text-3xl
`};
`;

const CoverPhoto = styled.div`
  ${tw`
  w-3/4
  rounded-2xl
  `}
  img {
    ${tw`
    w-2/4
    h-auto
    `}
  }
`;

const StacksContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    
  `};
`;

const Stack = styled.p`
  ${tw`
    text-gray-300
    text-xs
    font-bold
    ml-2
    mr-2
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const ProjectDescription = styled.p`
  word-wrap: normal;
  text-align: center;
  ${tw`
    text-gray-400
    text-xs
   pr-3
  pl-3
`};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const ButtonsContainer = styled.div`
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
const LinkButton = styled(Button)`
  ${tw`
    min-w-full
    ml-1
    mr-1

 
  `};
`;

const ColoredText = styled.span`
  ${tw`
text-yellow-500

`}
`;

export default function ProjectPage(props: IProjectPage) {
  const { title, description, link, thumbnail, stacks } = props.project;
  const history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${SCREENS.md})`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${SCREENS.md})`,
  });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <PageContainer>
      <Toolbar>
        <ToolbarLayer2>
          <HashLink to={"/#projects"}>
            <Button
              textColor="white"
              icon={<FontAwesomeIcon icon={faUndoAlt} />}
              // shape="circle"
              // circleSize={isDesktopOrLaptop ? 100 : 45}
            >
              Back
            </Button>
          </HashLink>
        </ToolbarLayer2>

        <ProjectTitle>{title}</ProjectTitle>
      </Toolbar>

      <CoverPhoto>
        <img src={thumbnail} />
      </CoverPhoto>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </PageContainer>
  );
}
