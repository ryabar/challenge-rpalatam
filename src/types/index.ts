interface ILoading {
  type?: string;
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

export { ILoading, IListArticle, IArticle, IInput };
