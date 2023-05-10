<template>
  <div>
    <v-app-bar app color="white" dark height="110" flat>
      <v-app-bar-title class="ml-5">
        <a href="/">
          <v-img contain src="../assets/logo.png" height="80" transition="scale-transition" />
        </a>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items id="nav" class="hidden-sm-and-down">
        <div>
          <router-link to="/">Naslovnica</router-link>
          <router-link to="/about">Projekti</router-link>
        </div>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-btn color="primary" rounded class="text-capitalize hidden-sm-and-down" height="45" width="auto">Prijavi se</v-btn>
      <v-btn icon @click="drawer = !drawer" large class="mr-5">
        <v-app-bar-nav-icon color="primary" class="hidden-md-and-up"></v-app-bar-nav-icon>
      </v-btn>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer" absolute left app temporary>
      <v-list>
        <v-list-item style="background-color: #094776; margin-top: -9px" class="d-flex justify-center">
          <v-list-item-icon class="mx-auto">
            <img src="../assets/sum-white.png" height="55px" />
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <v-list nav>
        <v-list-item-group v-model="group" active-class="primary--text text--accent-1">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Naslovnica</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-file-document-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Projekti</v-list-item-title>
          </v-list-item>

          <v-divider style="border: 1px solid rgb(192, 191, 191)" class="my-5"></v-divider>

          <v-list-item>
            <v-btn color="primary" rounded class="text-capitalize" height="40" width="auto">Prijavi se</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
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
