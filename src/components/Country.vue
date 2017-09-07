<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div>
        <input
          v-model="termCountry"
          class="form-control input-large"
          type="text"
          placeholder="Find Countries..."
          >
      </div>
      <div class="clearfix">&nbsp;</div>
      <div class="alert alert-warning" role="alert" v-if="countriesErrorMessage">{{ countriesErrorMessage }}</div>
      <div class="list-group">
        <router-link
          v-for="c in filterList(countries)"
          class="list-group-item"
          :to="{ name: 'CountryDetail', params: { code: c.alpha3Code.toLowerCase() } }"
          key="c.name"
          >
          <img
            class="img-circle"
            :src="c.flag"
            width="30px"
            height="30px"
            >
          {{ c.name }}
        </router-link>
        <!-- <a v-for="c in filterList(countries)" href="#" class="list-group-item">
          <img
            class="img-circle"
            :src="c.flag"
            width="30px"
            height="30px"
            > {{ c.name }}
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'countriesErrorMessage',
      'countries',
    ]),
  },
  data() {
    return {
      termCountry: null,
    };
  },
  methods: {
    ...mapActions({
      getAll: 'countries',
    }),
    filterList(data) {
      const term = this.termCountry;
      if (!term) return data;
      return data.filter(c => c.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    },
  },
  created() {
    this.getAll();
  },
};
</script>
