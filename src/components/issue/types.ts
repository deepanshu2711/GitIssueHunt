export type Label = {
  id: number;
  name: string;
  color: string;
};

export type Issue = {
  title: string;
  body: string;
  html_url: string;
  labels: Label[];
  user: { avatar_url: string };
  repository_url: string;
};

export type Option = {
  value: string;
  label: string;
};
