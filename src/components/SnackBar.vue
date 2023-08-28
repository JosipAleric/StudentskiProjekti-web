<template>
  <div class="text-center">
    <v-snackbar
      transition="true"
      left
      v-model="show"
      :color="snackbar.color"
      :timeout="3000"
      class="snackbar-shadow"
    >
      <div class="d-flex align-start alert-notify">
        <p class="mb-0">
          {{ snackbar.message }}
        </p>
      </div>

      <template v-slot:action="{ attrs }">
        <v-btn
          elevation="0"
          max-width="136"
          :ripple="false"
          height="43"
          class="font-weight-600 text-capitalize py-3 px-6 rounded-sm"
          color="rgba(255,255,255, .85)"
          text
          v-bind="attrs"
          @click="show = false"
        >Zatvori
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "SnackBar",
  props: {
    snackbar: Object,
  },
  computed: {
    show: {
      get() {
        return this.snackbar.visible;
      },
      set(value) {
        this.$emit("closeSnackbar", value);
      },
    },
  },
};
</script>