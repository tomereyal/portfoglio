export interface IProject {
  title: string;
  description?: string;
  stacks?: Array<string>;
  link?: string;
  githubLinkClient?: string;
  githubLinkServer?: string;
  thumbnail?: string;
  path?: string;
  features?: IProjectFeature[];
  slogan?: string;
}

export interface IProjectFeature {
  bulletins: string[];
  title?: string;
  img?: string;
}
