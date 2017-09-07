import api from '../../services/api';
import * as types from '../mutation-types';

// state for module, but also can call from external module
const state = {
  countriesErrorMessage: null,
  countryErrorMessage: null,
  countries: [],
  countryDetail: {},
};

const getters = {
  countriesErrorMessage: state => state.countryErrorMessage,
  countryErrorMessage: state => state.countryErrorMessage,
  countries: state => state.countries,
  countryDetail: state => state.countryDetail,
};

// all actions per module should placed here
const actions = {
  countries({ commit }) {
    api.countries(
      (result) => {
        console.log('result success', result);
        commit(types.LOAD_COUNTRIES_SUCCESS, result);
      },
      (error) => {
        console.log('result error', error);
        commit(types.LOAD_COUNTRIES_FAILURE, error);
      },
    );
  },
  countryDetail({ commit }, code) {
    api.countryDetail(code,
      (result) => {
        console.log('result detail country success', result);
        commit(types.DETAIL_COUNTRY_SUCCESS, result);
      },
      (error) => {
        console.log('result detail country error', error);
        commit(types.DETAIL_COUNTRY_FAILURE, error);
      },
    );
  },
};

const mutations = {
  [types.LOAD_COUNTRIES_SUCCESS](state, result) {
    state.countriesErrorMessage = null;
    state.countries = result;
  },
  [types.LOAD_COUNTRIES_FAILURE](state, error) {
    state.countriesErrorMessage = error;
    state.countries = [];
  },
  [types.DETAIL_COUNTRY_SUCCESS](state, result) {
    state.countryErrorMessage = null;
    state.countryDetail = result;
  },
  [types.DETAIL_COUNTRY_FAILURE](state, error) {
    state.countryErrorMessage = error;
    state.countryDetail = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
