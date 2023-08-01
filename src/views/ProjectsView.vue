<template>
  <v-img src="../assets/background.jpg">
    <v-container>
      <div class="mb-4 mt-3 mx-3">
        <h1 class="display-2 font-weight-bold mb-3 text-center" style="color: #094776">Studentski Projekti</h1>
        <p class="text-h6 text--secondary font-weight-regular text-center">Prikaz svih prijavljenih studentskih projekata.</p>
      </div>
      <div style="height: 1px; margin-bottom: 40px; background: linear-gradient(90deg, rgb(255, 255, 255), rgb(8, 71, 118), rgb(255, 255, 255))"></div>
      <!-- Table start -->
      <v-card outlined elevation="11"  style="max-width: 1500px;" class="mx-auto">
        <!-- Table heading -->
        <v-card-title>
          <div class="v-card__title align-start mt-n5">
            <div class="overflow-hidden mt-n7 mb-n4 transition-swing v-card--material__sheet v-sheet primary elevation-7 rounded" style="max-width: 100%">
              <div class="pa-7">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-clipboard-text theme--dark"> </i>
              </div>
            </div>
            <h3 class="font-weight-medium primary--text pl-3">Projekti</h3>
          </div>
          <v-spacer></v-spacer>
          <!-- Table Search bar -->
          <v-text-field v-model="search" class="mt-3 mt-md-0" prepend-inner-icon="mdi-magnify" label="Search" hide-details style="max-width: 400px"></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :search="search" :items="APIdata" :items-per-page="5" class="elevation-1" mobile-breakpoint="0">
          <!-- Table Name column -->
          <template v-slot:[`item.name`]="{ item }">
            <td class="text-lg-left font-weight-medium body-1" style="white-space: nowrap">
              <div class="d-flex align-center">
                <img src="../assets/images/no_project.jpg" width="110px" height="70px" class="mr-4 my-3 rounded-lg" style="vertical-align: middle;" />
                <div class="d-flex flex-column">
                  <span> {{ item.name }} </span>
                  <span class="text--secondary subtitle-2">Josip Aleric </span>
                </div>
              </div>
            </td>
          </template>
          <!-- Table Date column -->
          <template v-slot:[`item.datum`]="{ item }">
            <td class="body-1">
              {{ item.datum }}
            </td>
          </template>
          <!-- Table Status column -->
          <template v-slot:[`item.status`]="{ item }">
            <td class="body-1">
              <v-chip color="green" outlined small>{{ item.status }}</v-chip>
            </td>
          </template>
          <!-- Table GitHub column -->
          <template v-slot:[`item.github_link`]="{ item }">
            <td class="body-1 text-center">
              <v-btn color="primary" elevation="6" icon outlined class="my-auto" :href="item.github_link"><v-icon> mdi mdi-github</v-icon></v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <!-- Dialog -->
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark color="primary" fab bottom right fixed v-bind="attrs" v-on="on" @click="show_dialog = true">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>
      <span>Dodaj novi projekt</span>
    </v-tooltip>
    <v-dialog transition="dialog-top-transition" max-width="800" :value="show_dialog" @click:outside="show_dialog = false">
      <v-card>
        <v-toolbar color="primary" dark>
          <v-app-bar-nav-icon>
            <v-img contain src="../assets/sum-white.png" height="20" class="ml-5" />
          </v-app-bar-nav-icon>
          <v-toolbar-title>
            <span style="font-size: 19px">Prijava projekta</span>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form class="mt-5" ref="form" @submit.prevent="submitForm">
            <v-text-field v-model="firstName" :rules="nameRules" label="Ime" outlined shaped dense></v-text-field>
            <v-text-field v-model="lastName" :rules="nameRules" label="Prezime" outlined shaped dense></v-text-field>
            <v-text-field v-model="projectLink" :rules="projectLinkRules" label="Link projekta" outlined shaped dense></v-text-field>
            <v-text-field v-model="github_link" :rules="projectLinkRules" label="GitHub Link" outlined shaped dense></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" outlined shaped dense></v-text-field>
          </v-form>
          <div style="height: 1px; background: linear-gradient(90deg, rgb(255, 255, 255), rgb(8, 71, 118), rgb(255, 255, 255)); margin-bottom: 8px;"></div>
        </v-card-text>
        <v-card-actions class="justify-center mt-n5">
          <v-btn class="text-capitalize" color="primary" @click="show_dialog = false" outlined rounded><v-icon left dark> mdi-close </v-icon>Zatvori</v-btn>
          <v-btn class="text-capitalize" color="primary" @click="submitForm()" rounded> <v-icon left dark> mdi-cloud-upload </v-icon> Prijavi projekt</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    show_dialog: false,
    search: "",
    headers: [
      {
        text: "Projekt",
        align: "start",
        sortable: false,
        value: "name",
        class: "subtitle-1 primary--text font-weight-bold title",
      },
      {
        text: "Datum objave",
        value: "datum",
        class: "subtitle-1 primary--text font-weight-bold title",
      },
      {
        text: "Status",
        value: "status",
        class: "subtitle-1 primary--text font-weight-bold title",
      },
      {
        text: "Github link",
        value: "github_link",
        align: "center",
        sortable: false,
        class: "subtitle-1 primary--text font-weight-bold title",
      },
    ],
    firstName: "",
    lastName: "",
    projectLink: "",
    github_link: "",
    email: "",
    emailRules: [(v) => !!v || "Email is required", (v) => /.+@.+\..+/.test(v) || "Email must be valid"],
    projectLinkRules: [(v) => !!v || "Project Link is required", (v) => /^(ftp|http|https):\/\/[^ "]+$/.test(v) || "Project Link must be a valid URL"],
    nameRules: [(v) => !!v || "Name is required"],

    APIdata: [
      {
        name: "Real Estate",
        datum: "28.08.2021",
        status: "Odobren",
        github_link: "https://pzi072023.sutdenti.sum.ba",
      },
      {
        name: "AutoSalon",
        datum: "19.05.2022",
        status: "Odobren",
        github_link: "https://pzi072023.sutdenti.sum.ba",
      },
      {
        name: "Studentski Projekti",
        datum: "19.05.2022",
        status: "Odobren",
        github_link: "https://pzi072023.sutdenti.sum.ba",
      },

      {
        name: "Auto Salon Backend",
        datum: "19.05.2022",
        status: "Odobren",
        github_link: "https://pzi072023.sutdenti.sum.ba",
      },
      {
        name: "Real Estate",
        datum: "29.7.2021",
        status: "Odobren",
        github_link: "https://pzi072023.sutdenti.sum.ba",
      },
      {
        name: "Real Estate",
        datum: "21.1.2019",
        status: "Odobren",
        github_link: "https://pzi072023.sutdenti.sum.ba",
      },
    ],
  }),
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Form is valid, you can perform your submission logic here
        alert("Valid alert");
      }
    },
  },
};
</script>

<style>
.v-application .body-1 {
  font-family: "Poppins";
}
</style>
