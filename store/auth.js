import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null
  }),

  getters: {
    user: (state) => state.authUser,
  },

  actions: {
    async getToken() {
      await axios.get('sanctum/csrf-cookie');
    },
    async getUser() {
      const response = await axios.get('api/user');
      this.authUser = response.data;
    },
    async login(email, password){
      await this.getToken();
      await axios.post('/login', {
        email: email,
        password: password
      })
    },
    async logout(){
      await axios.post('/logout');
      this.authUser = null;
    }
  }
});
