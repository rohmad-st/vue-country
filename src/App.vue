<template>
  <div id="app">
    <a href="https://github.com/rohmad-st/vue-country"><img style="position: fixed; top: 0; right: 0; border: 0; z-index: 1" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
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
