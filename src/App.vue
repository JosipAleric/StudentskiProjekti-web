<template>
  <v-app>
    <NavBar v-if="$route.path != '/login' && $route.path != '/register'"></NavBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: "App",
  components: {
    NavBar
  },

  data: () => ({
    //
  }),

};
</script>


