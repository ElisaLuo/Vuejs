<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field v-model="username" label="Username"/><br>
          <v-text-field type="password" v-model="password" label="Password"/><br>
          <v-btn class="cyan" @click="register" dark>Register</v-btn>
          <p class="err">{{error}}</p>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// imports service
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () { // calls for auth function register
      const response = await AuthenticationService.register({
        username: this.username,
        password: this.password
      })
      this.error = response.data
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .err{
    color: red;
  }
</style>
