<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../../store/auth.js';
  
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          await useAuthStore().login(this.email, this.password);
          await useAuthStore().getUser()
          this.$router.push('/');
        } catch (error) {
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      },
    },
  };
  </script>
  