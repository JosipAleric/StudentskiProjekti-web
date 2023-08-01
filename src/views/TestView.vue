<template>
    <div v-if="authStore.user">
    <h1>Welcome, {{ authStore.user.first_name }}</h1>
    <p>Email: {{ authStore.user.email }}</p>
    <!-- Add more properties here as per your user object structure -->
  </div>
  <div v-else>
    <p>Please log in to view your profile.</p>
  </div>
  </template>
  
  <script>
  import { useAuthStore } from '../../store/auth.js';
  
  export default {
  name: 'UserProfile',
  setup(){
    const authStore = useAuthStore();
    return {authStore}
  }
};
  </script>