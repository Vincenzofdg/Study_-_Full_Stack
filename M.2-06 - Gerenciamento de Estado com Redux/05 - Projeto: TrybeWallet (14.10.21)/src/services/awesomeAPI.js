const AWESOME_BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrencies = async () => ((await fetch(AWESOME_BASE_URL)).json());

export default fetchCurrencies;
