const endpoint = 'https://opentdb.com/api_token.php?command=request';

const triviaApi = async () => {
  const response = await fetch(endpoint);
  const json = await response.json();
  const sucesso = response.ok ? Promise.resolve(json) : Promise.reject(json);
  return sucesso;
};

export default triviaApi;
