import { ITechnologies } from "../../typings/technology";
import js from "../../assests/techLogos/js.svg";
import ts from "../../assests/techLogos/ts.svg";
import css from "../../assests/techLogos/css.svg";
import scss from "../../assests/techLogos/scss.svg";
import html5 from "../../assests/techLogos/html5.svg";
import react from "../../assests/techLogos/react.svg";
import node from "../../assests/techLogos/node.svg";
import mongo from "../../assests/techLogos/mongo.svg";
import sql from "../../assests/techLogos/sql.svg";
import mySql from "../../assests/techLogos/mySql.svg";
import git from "../../assests/techLogos/git.svg";
import client from "../../assests/techLogos/client.svg";
import clientApp from "../../assests/techLogos/clientApp.svg";
import server from "../../assests/techLogos/server.svg";
import database3d from "../../assests/techLogos/database3d.svg";
import database from "../../assests/techLogos/database.svg";
import development from "../../assests/techLogos/development.svg";
import angular from "../../assests/techLogos/angularLogo.svg";
import socket from "../../assests/techLogos/socketLogo.svg";
import PHP from "../../assests/techLogos/phpLogo.svg";
import {
  faDatabase,
  faRocket,
  faServer,
  faTabletAlt,
} from "@fortawesome/free-solid-svg-icons";
export const clientSideTechs = [
  { name: "HTML", logo: html5 },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "TypeScript", logo: ts },
  // { name: "CSS", logo: css },
  { name: "SCSS", logo: scss },
  // { name: "HTML5", logo: html5 },
  { name: "ReactJS", logo: react, bold: true },
  { name: "Angular", logo: angular, bold: true },
];

export const serverSideTechs = [
  { name: "NodeJS & Express", logo: node },
  { name: "PHP", logo: PHP },
  { name: "Socket-io", logo: socket },
];

export const dataBaseTechs = [
  { name: "MongoDB & Mongoose", logo: mongo },
  { name: "SQL & MySQL", logo: mySql },
];

export const developmentTechs = [{ name: "Git", logo: git }];

export const technologies: Array<ITechnologies> = [
  {
    type: "Client-Side",
    content: clientSideTechs,
    logo: faTabletAlt,
  },
  {
    type: "Server-Side",
    content: serverSideTechs,
    logo: faServer,
  },
  {
    type: "Databases",
    content: dataBaseTechs,
    logo: faDatabase,
  },
  { type: "Dev", content: developmentTechs, logo: faRocket },
];
