import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

import { IProject } from "../../../typings/project";
import Button from "../../components/button";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import {
  ButtonsContainer,
  Card,
  CoverPhoto,
  FeatureTitle,
  PageContainer,
  ProjectDescription,
  ProjectTitle,
  SectionFlexCol,
  SectionTitle,
  Stack,
  StacksContainer,
  Toolbar,
  ToolbarLayer2,
} from "./projectPage.components";

interface IProjectPage {
  project: IProject;
}

export default function ProjectPage(props: IProjectPage) {
  const { title, description, link, thumbnail, stacks, features } =
    props.project;
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${SCREENS.md})`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${SCREENS.md})`,
  });

  const goToWebsite = () => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <Toolbar>
        <ToolbarLayer2>
          <HashLink to={"/#projects"}>
            <Button
              textColor="white"
              icon={<FontAwesomeIcon icon={faUndoAlt} />}
              text={isDesktopOrLaptop ? "Back" : ""}
              // shape="circle"
              // circleSize={isDesktopOrLaptop ? 100 : 45}
            ></Button>
          </HashLink>
        </ToolbarLayer2>

        <ProjectTitle>{title}</ProjectTitle>
      </Toolbar>
      <SectionFlexCol>
        <CoverPhoto onClick={goToWebsite}>
          <img src={thumbnail} />
        </CoverPhoto>

        <ProjectDescription>{description}</ProjectDescription>
        <ButtonsContainer>
          <Button
            text="Check Out Website"
            theme="outlined"
            textColor="white"
          ></Button>
        </ButtonsContainer>
      </SectionFlexCol>

      <SectionFlexCol>
        <SectionTitle>Stacks</SectionTitle>

        <StacksContainer>
          {stacks?.map((stack) => (
            <Stack>{stack}</Stack>
          ))}
        </StacksContainer>
      </SectionFlexCol>
      <SectionFlexCol>
        <SectionTitle>Features</SectionTitle>
        {features?.map(({ title, bulletins, img }) => (
          <Card key={title}>
            <FeatureTitle>&#11088; {title}</FeatureTitle>
            <ul>
              {bulletins.map((b, index) => (
                <li key={index + "b"}> &#9989;{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </SectionFlexCol>
    </PageContainer>
  );
}
