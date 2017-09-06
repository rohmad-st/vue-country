import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Country from '@/components/Country';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/country',
      name: 'Country',
      component: Country,
    },
  ],
});
