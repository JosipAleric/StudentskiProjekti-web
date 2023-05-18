<template>
  <v-container>
    <div class="mb-4 mt-3 mx-3">
      <h1 class="display-2 font-weight-bold mb-3 text-center" style="color: #094776">Studentski Projekti</h1>
      <p class="text-h6 text--secondary font-weight-regular text-center">
        Prikaz svih prijavljenih studentskih projekata.
      </p>
    </div>
    <div
      style="height: 1px; margin-bottom: 40px; background: linear-gradient(90deg, rgb(255, 255, 255), rgb(8, 71, 118), rgb(255, 255, 255));">
    </div>
    <!-- Table start -->
    <v-card>
      <!-- Table heading -->
      <v-card-title>
        <div class="v-card__title align-start mt-n3">
          <div class="overflow-hidden
                      mt-n7
                      mb-n4
                      transition-swing
                      v-card--material__sheet
                      v-sheet
                      primary
                      elevation-7
                      rounded" 
                      style="max-width: 100%;">
            <div class="pa-7">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-clipboard-text theme--dark">
              </i>
            </div>
          </div>
          <h3 class="font-weight-medium primary--text pl-3">
            Projekti
          </h3>
        </div>
        <v-spacer></v-spacer>
        <!-- Table Search bar -->
        <v-text-field v-model="search" class="mt-3 mt-md-0" append-icon="mdi-magnify" label="Search" hide-details
          style="max-width: 400px"></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :search="search" :items="APIdata" :items-per-page="5" class="elevation-1"
        mobile-breakpoint="0">
        <!-- Table Name column -->
        <template v-slot:[`item.name`]="{ item }">
          <td class="text-lg-left font-weight-medium body-1">
            <div class="d-flex align-center">
              <img src="https://api.pikwy.com/web/6463cc6007e0f77a30496398.jpg" width="110px" height="70px"
                class="mr-4 my-2 rounded-lg" style="vertical-align: middle" />
              <div class="d-flex flex-column">
                <span class="mr-4" style="font-size: 16px"> {{ item.name }} </span>
                <span class="mr-4 text--secondary" style="font-size: 14px"> Josip Aleric </span>
              </div>
            </div>
          </td>
        </template>
        <!-- Table Date column -->
        <template v-slot:[`item.datum`]="{ item }">
          <td class="body-2">
            {{ item.datum }}
          </td>
        </template>
        <!-- Table Status column -->
        <template v-slot:[`item.status`]="{ item }">
          <td class="body-2">
            <v-chip color="green" outlined small>{{ item.status }}</v-chip>
          </td>
        </template>
        <!-- Table GitHub column -->
        <template v-slot:[`item.github_link`]="{ item }">
          <td class="body-2 text-center">
            <v-btn color="primary" elevation="6" icon outlined class="my-auto" :href=item.github_link><v-icon> mdi
                mdi-github</v-icon></v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Projekt",
        align: "start",
        sortable: false,
        value: "name",
        class: "subtitle-1 primary--text font-weight-bold title",
        width: "300px"
      },
      {
        text: "Datum objave",
        value: "datum",
        class: "subtitle-1 primary--text font-weight-bold title",
        width: "300px"
      },
      {
        text: "Status",
        value: "status",
        class: "subtitle-1 primary--text font-weight-bold title",
        width: "300px"
      },
      {
        text: "Github link",
        value: "github_link",
        align: "center",
        sortable: false,
        class: "subtitle-1 primary--text font-weight-bold title",
        width: "300px"
      }],

    APIdata: [{
      "name": "Real Estate",
      "datum": "28.08.2021",
      "status": "Odobren",
      "github_link": "https://pzi072023.sutdenti.sum.ba"
    },
    {
      "name": "AutoSalon",
      "datum": "19.05.2022",
      "status": "Odobren",
      "github_link": "https://pzi072023.sutdenti.sum.ba"
    },
    {
      "name": "Real Estate",
      "datum": "19.05.2022",
      "status": "Odobren",
      "github_link": "https://pzi072023.sutdenti.sum.ba"
    },

    {
      "name": "Real Estate",
      "datum": "19.05.2022",
      "status": "Odobren",
      "github_link": "https://pzi072023.sutdenti.sum.ba"
    },
    {
      "name": "Real Estate",
      "datum": "29.7.2021",
      "status": "Odobren",
      "github_link": "https://pzi072023.sutdenti.sum.ba"
    },
    {
      "name": "Real Estate",
      "datum": "21.1.2019",
      "status": "Odobren",
      "github_link": "https://pzi072023.sutdenti.sum.ba"
    }],
  }),
  methods: {

  }
};
</script>
