<template>
  <v-app>
    <v-toolbar color="white" dark height="110" flat hide-on-scroll>
      <v-toolbar-title class="ml-5">
        <v-img contain src="./assets/logo.png" transition="scale-transition" height="80" />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items id="nav" class="hidden-sm-and-down">
        <div>
          <router-link to="/">Naslovnica</router-link>
          <router-link to="/about">Projekti</router-link>
        </div>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-btn color="primary" rounded class="text-capitalize hidden-sm-and-down" height="40" width="150">Prijavi se</v-btn>
      <v-btn icon @click="drawer = !drawer" large class="mr-5">
        <v-app-bar-nav-icon color="primary" class="hidden-md-and-up"></v-app-bar-nav-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute left app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    drawer: false,
    group: null,
  }),
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
}
#nav {
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: 500;
  color: #094776;
  text-decoration: none;
  margin-left: 15px;
}

#nav a.router-link-exact-active {
  background-color: #d8d8d8;
  border-radius: 30px;
  padding: 10px 20px 10px 20px;
}
</style>
