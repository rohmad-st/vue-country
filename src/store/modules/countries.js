import api from '../../services/api';
import * as types from '../mutation-types';

// state for module, but also can call from external module
const state = {
  countries: [],
};

const getters = {
  countries: state => state.countries,
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
};

const mutations = {
  [types.LOAD_COUNTRIES_SUCCESS](state, result) {
    state.countries = result;
  },
  [types.LOAD_COUNTRIES_FAILURE](state, result) {
    state.countries = result;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
