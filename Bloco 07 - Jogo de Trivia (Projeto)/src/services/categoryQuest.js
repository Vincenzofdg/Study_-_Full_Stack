const categoryQuest = async () => {
  const response = await fetch('https://opentdb.com/api_category.php');
  const json = await response.json();
  const sucesso = response.ok ? Promise.resolve(json) : Promise.reject(json);
  return sucesso;
};

export default categoryQuest;
