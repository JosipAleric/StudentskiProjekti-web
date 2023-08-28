import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null,
    token: null
  }),

  getters: {
    user: (state) => state.authUser,
    token: (state) => state.token,
  },

  actions: {
    async getToken() {
      await axios.get('sanctum/csrf-cookie');
    },
    async getUser() {
      const response = await axios.get('auth/user');
      this.authUser = response.data;
    },
    async login(email, password){
      let response = await axios.post('auth/login', {
        email: email,
        password: password
      })
      axios.defaults.headers.common['Authorization']='Bearer ' + response.data.access_token;
      this.token = response.data.access_token
    },
    async logout(){
      await axios.get('auth/logout');
      this.authUser = null;
      this.token = null;
    },
    async register(data){
      let response = await axios.post('auth/register', data);
      axios.defaults.headers.common['Authorization']='Bearer ' + response.data.access_token;
      console.log(response.data)
    }
  }
});
