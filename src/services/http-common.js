import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
  // uncomment if need authorization
  // headers: { Authorization: `Token ${access_token}` },
});
