<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer>
        <div class="text-center mt">
            <p>Created &copy; 2017 by <a target="_blank" href="https://github.com/rohmad-st">Rohmad Sasmito</a></p>
        </div>
    </footer>
  </div>
</template>

<script>
require('./assets/sass/app.scss');

export default {
  name: 'app',
};
</script>
