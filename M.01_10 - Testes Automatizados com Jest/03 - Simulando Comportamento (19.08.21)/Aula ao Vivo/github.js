const fetch = require('node-fetch'); // Se não estiver achando o pack (internal/modules/cjs/loader.js:892) rode o comando > npm i node-fetch

const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

// Recupera as informações do usuário a partir do username
const getRepositoryInfoFromUsername = async (username) => {
  const url = getUserReposUrl(username);
  const response = await fetch(url);
  const repositoryInfo = await response.json();

  let { name, company, twitter_username: twitter, location } = repositoryInfo;

  return {
    name,
    company,
    twitter,
    location,
  }
}
getRepositoryInfoFromUsername('Vincenzofdg').then((data) => console.log(data));

module.exports = {
  getRepositoryInfoFromUsername,
  getUserReposUrl,
};