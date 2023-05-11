<template>
  <div>
    <v-container >
      <v-row no-gutters style="height: 91vh">
        <v-col lg="6" md="12" sm="12" xs="12" class="d-flex align-center justify-center" >
          <div>
            <v-divider class="my-8 hidden-md-and-down" style="border: 1px solid rgb(192, 191, 191)"></v-divider>
            <div class="my-8 hidden-lg-and-up"></div>
            <h1 class="display-2 font-weight-bold mb-3 text-center" style="color: #094776">SUM Studentski Projekti</h1>
            <p class="text-h6 text--secondary font-weight-regular text-center" style="max-width: 500px">
              Dobrodošli na web stranicu Sveučilišta u Mostaru. <br />
              Na ovom dijelu sustava možete pronaći detaljne informacije o studentskim projektima.
            </p>
            <div class="text-center">
              <v-btn class="text-capitalize font-weight-medium" depressed color="primary" elevation="24" rounded height="50" width="150" @click="$vuetify.goTo(target, options)">Saznaj više</v-btn>
            </div>
            <v-divider class="my-8" style="border: 1px solid rgb(192, 191, 191)"></v-divider>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" xs="12" class="d-flex align-center justify-center">
          <v-img :aspect-ratio="16 / 9" id="hero_image" src="../assets/images/landing/hero_image.jpg" alt="" transition="scale-transition"/>
        </v-col>
      </v-row>
    </v-container>
    <v-row style="min-height: 500px; margin-top: 100px; background-color: #094776">
      <v-col cols="12" class="d-flex align-center justify-center px-5">
        <div style="max-width: 1500px">
          <v-img contain class="mb-8" src="../assets/sum-white.png" transition="scale-transition" height="80" />
          <p class="text-white font-weight-regular text-center" style="color: #ffffff; font-size: larger">
            <b>SUM Studentski projekti</b> je web stranica koja omogućava pretraživanje, pregled i prijavu projekata napravljenih od strane studenata Sveučilišta u Mostaru. <br />
            Na stranicu se možete prijaviti pomoću eduID korisničkog računa.
          </p>
          <div class="text-center mt-5">
          <v-btn color="white" rounded outlined class="text-capitalize mr-2" height="47" width="auto" to="/projects">Pretraži projekte</v-btn>
          <v-btn color="white" rounded class="text-capitalize" height="47" width="auto">Prijavi se</v-btn>
        </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1263px) {
  #hero_image {
    max-width: 600px;
  }
}
</style>

<script>

export default {
  name: "HomeView",
  data: () => ({
    //
  }),
  computed: {
      target () {
         return "button"
      },
      options () {
        return {
          duration: 300,
          offset: -800,
        }
      },
    },
};
</script>

