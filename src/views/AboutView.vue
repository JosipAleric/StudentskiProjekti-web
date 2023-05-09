<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters style="height: 91vh">
        <v-col cols="12" lg="6" md="12" sm="12" xs="12" class="d-flex align-center justify-center" >
          <div>
            <v-divider class="my-8"></v-divider>
            <h1 class="display-2 font-weight-bold mb-3 text-center" style="color: #094776">SUM Studentski Projekti</h1>
            <p class="text-h6 text--secondary font-weight-regular text-center" style="max-width: 500px;">
              Dobrodošli na web stranicu Sveučilišta u Mostaru. <br />
              Na ovom dijelu sustava možete pronaći detaljne informacije o studentskim projektima.
            </p>
            <div class="text-center">
              <v-btn class="text-capitalize font-weight-medium" depressed color="primary" elevation="24" rounded height="50" width="150">Saznaj više</v-btn>
            </div>
            <v-divider class="mt-8"></v-divider>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" xs="12" class="d-flex align-center justify-center">
          <v-img :aspect-ratio="16/9" id="hero_image"
         src="https://img.freepik.com/free-vector/managers-workshop-training-manager-skills-brainstorming-board_335657-3305.jpg?w=1380&t=st=1683583827~exp=1683584427~hmac=f5c0a0f45511aed53fd032eeb529c4cc39b313d19f853d6ca4f72bf701b576ff" alt=""/>
        </v-col>
      </v-row>
    </v-container>
    <v-row style="height: 400px; margin-top: 100px; background-color: #094776;" >
      <v-col cols="12" lg="12">
        <v-img contain src="https://sumit.sum.ba/Rectangle.svg" transition="scale-transition" height="170" />
        <v-img contain src="https://sumit.sum.ba/img.svg" transition="scale-transition" height="80" />

      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1263px) {
  #hero_image{
    max-width: 600px;
  }
}
</style>