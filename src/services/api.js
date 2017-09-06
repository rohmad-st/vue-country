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
};
