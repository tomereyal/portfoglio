import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";

import HomePage from "./app/pages/HomePage";
import ThemeProvider from "./app/ThemeContext";
import Navbar from "./app/components/navbar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { projects } from "./app/app-config/projects";
import ProjectPage from "./app/pages/ProjectPage";
const AppContainer = styled.div`
  ${tw`w-full min-h-screen flex flex-col`}
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />

        <ThemeProvider>
          <Switch>
            {projects.map((project) => (
              <Route key={project.title} path={project.path}>
                <ProjectPage project={project}></ProjectPage>
              </Route>
            ))}

            <Route path={"/"}>
              <HomePage />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
