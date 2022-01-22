export interface ITechnology {
  name: string;
  bold?: boolean;
  logo?: any;
}

export interface ITechnologies {
  type: string;
  content: Array<ITechnology>;
  logo?: any;
}
