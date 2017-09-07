import Vue from 'vue';
import Router from 'vue-router';
import Country from '@/components/Country';
import CountryDetail from '@/components/CountryDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Country',
      component: Country,
    },
    {
      path: '/detail/:code',
      name: 'CountryDetail',
      component: CountryDetail,
    },
  ],
});
