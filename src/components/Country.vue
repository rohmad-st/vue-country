<template>
  <div>
    <ul>
      <li v-for="c in countries">
        <img :src="c.flag" width="30px">
      {{ c.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'countries',
    ]),
  },
  data() {
    return {
      message: 'Haloo kenapa kamu disitu duduk termenung?',
    };
  },
  methods: {
    ...mapActions({
      getAll: 'countries',
    }),
  },
  created() {
    this.getAll();
  },
};
</script>
