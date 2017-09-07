import { httpClient } from './http-common';

export default {
  // load all countries
  countries(cb, errorCb) {
    httpClient.get('all')
    .then((response) => {
      cb(response.data);
    }, (error) => {
      errorCb(error.response);
    })
    .catch((error) => {
      errorCb(error);
    });
  },
  // get detail country by code
  countryDetail(code, cb, errorCb) {
    httpClient.get(`alpha/${code}`)
    .then((response) => {
      cb(response.data);
    }, (error) => {
      errorCb(error.response);
    })
    .catch((error) => {
      errorCb(error);
    });
  },
};
