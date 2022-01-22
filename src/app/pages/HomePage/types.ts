export interface IProject {
  title: string;
  description: string;
  link?: string;
  thumbnail?: string;
}

export interface IHomePageState {
  project: IProject[];
}
