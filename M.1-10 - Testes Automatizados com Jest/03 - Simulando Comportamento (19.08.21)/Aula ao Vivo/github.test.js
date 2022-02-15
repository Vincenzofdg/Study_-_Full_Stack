const { getRepositoryInfoFromUsername, getUserReposUrl } = require('./github');
const github = require('./github');
const fetch = require('node-fetch');

jest.mock('node-fetch');// Apartir deste momento o fetch nao funciona mais, nos que devemos fazer a implementação... ele foi mockado.

describe('when calling getRepositoryInfoFromUsername function', () => {
  it('should parse the response into an object with name, company, location and twitter', async () => {
    expect.assertions(1);
    fetch.mockImplementation(async () => {
      return {
        json: async () => { // função retorna uma outra Promise, por isso tem o async
          return {
            name: 'Gabriel Oliva',
            company: '@betrybe',
            twitter_username: 'gfpoliva', // tem que ser o nome que retorna da API por isso nao se usara 'twitter'
            location: 'Belo Horizonte'
          }
        }
      }
    });
    const repositoryInfo = await getRepositoryInfoFromUsername('gfpoliva');
    expect(repositoryInfo).toEqual({
      name: 'Gabriel Oliva',
      company: '@betrybe',
      twitter: 'gfpoliva',
      location: 'Belo Horizonte'
    });
  });

  it('should call a function named getUserReposUrl', () => {
    const spiedGetUserReposUrl = jest.spyOn(github, 'getUserReposUrl'); // ('modulo', 'função')

    spiedGetUserReposUrl('Vincenzofdg');
    expect(spiedGetUserReposUrl).toHaveBeenCalledTimes(1);
    expect(spiedGetUserReposUrl('Vincenzofdg')).toBe('https://api.github.com/users/Vincenzofdg');

    spiedGetUserReposUrl('victormartins');
    expect(spiedGetUserReposUrl).toHaveBeenCalledWith('victormartins');
  });
});