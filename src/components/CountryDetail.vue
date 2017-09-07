<template>
  <div>
    <!-- Breadcumb -->
    <ol class="breadcrumb">
      <li><router-link :to="{ name: 'Country' }">Home</router-link></li>
      <li class="active">Detail of {{ country.name }}</li>
    </ol>
    <!-- Detail -->
    <div class="panel panel-default">
      <div class="panel-body text-center">
        <img :src="country.flag" width="100px" height="100px" class="img-circle">
        <h4>{{ country.name }}</h4>
        <div class="row">
          <div class="col-sm-4 col-md-4">
            <div class="thumbnail">
              <div class="caption">
                <h3>Capital</h3>
                <p>{{ country.capital }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div class="thumbnail">
              <div class="caption">
                <h3>Regional</h3>
                <p>{{ country.region }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div class="thumbnail">
              <div class="caption">
                <h3>Sub Regional</h3>
                <p>{{ country.subregion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="list-group">
         <li class="list-group-item"><strong>Population</strong> {{ country.population }}</li>
         <li class="list-group-item"><strong>Area</strong> {{ country.population }}</li>
         <li class="list-group-item"><strong>Coordinate</strong> ({{ coordinate }})</li>
         <li class="list-group-item"><strong>Code Area</strong> {{ callingCodes }}</li>
         <li class="list-group-item"><strong>Currency</strong> {{ currency }}</li>
         <li class="list-group-item"><strong>Top Domain</strong> {{ topLevelDomain }}</li>
       </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      country: 'countryDetail',
    }),
    currency() {
      const currencies = this.country.currencies;
      if (!currencies) return null;
      return `${currencies[0].name} (${currencies[0].symbol}) (${currencies[0].code})`;
    },
    callingCodes() {
      return this.country.callingCodes.join(', ');
    },
    coordinate() {
      return this.country.latlng.join(', ');
    },
    topLevelDomain() {
      return this.country.topLevelDomain.join(', ');
    },
  },
  data() {
    return {
      termCountry: null,
    };
  },
  methods: {
    ...mapActions({
      getDetail: 'countryDetail',
    }),
    filterList(data) {
      const term = this.termCountry;
      if (!term) return data;
      return data.filter(c => c.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    },
  },
  created() {
    const code = this.$route.params.code;
    this.getDetail(code);
  },
};
</script>
