const fetchArticles = async (user: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${user}/posts`
  );
  return await response.json();
};

export default fetchArticles;
