<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="12" md="12" sm="12" xs="12">
          <div>
            <h1 class="display-2 font-weight-bold mb-3 text-center" style="color: #094776">Studentski Projekti</h1>
            <br />
            <p class="text-center body-1 pt-2 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure eligendi. Eius magni vero voluptates totam voluptatem odit.</p>
            <v-row style="padding: 0% 10%">
              <v-col cols="12" lg="4" md="4" sm="12" class="text-center text-body-1">
                <h3>Ukupan broj projekata: <br /><span style="color: #094776">150 projekata</span></h3>
              </v-col>
              <v-col class="text-center text-body-1" cols="12" lg="4" md="4" sm="12">
                <h3>Ukupan broj studenata: <br /><span style="color: #094776">75 studenata </span></h3>
              </v-col>
              <v-col class="text-center text-body-1" cols="12" lg="4" md="4" sm="12">
                <h3>Lorem <br /><span style="color: #094776">170 Lorem </span></h3>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-card outlined class="mt-8 grey lighten-3">
        <v-card-title>
          <div class="v-card__title align-start mt-n3">
            <div class="overflow-hidden mt-n7 mb-n4 transition-swing v-card--material__sheet v-sheet primary elevation-7 rounded" style="max-width: 100%">
              <div class="pa-7">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-clipboard-text theme--dark"> </i>
              </div>
            </div>
            <h3 class="font-weight-light pl-3">Projekti</h3>
          </div>
          <v-spacer></v-spacer>

          <!-- Table Search bar -->
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search" class="grey lighten-3"></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    };
  },
};
</script>
