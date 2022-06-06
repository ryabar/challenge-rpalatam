interface ILoading {
  type?: string;
}

interface ITitleArticle {
  title: string;
}

interface IUserArticle {
  user: string;
}

interface IAboutArticle {
  description: string;
}

interface IListArticle {
  articles: IArticle[];
}

interface IArticle {
  title: string;
  description: string;
  user: string;
}

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  value: string;
}

interface IButton{
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  cssCustom?: string;
}

interface IHeader {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueSearch: string;
}

export {
  ILoading,
  IListArticle,
  IArticle,
  IInput,
  ITitleArticle,
  IUserArticle,
  IAboutArticle,
  IButton,
  IHeader
};
