const endpoint = ({ category, difficulty, type }) => {
  let point = 'https://opentdb.com/api.php?amount=5';
  if (category) point += `&category=${category}`;
  if (difficulty) point += `&difficulty=${difficulty}`;
  if (type) point += `&type=${type}`;
  return point;
};
const questionApi = async (token, congif) => {
  const response = await fetch(`${endpoint(congif)}&${token}`);
  const json = await response.json();
  const sucesso = response.ok ? Promise.resolve(json) : Promise.reject(json);
  return sucesso;
};

export default questionApi;
