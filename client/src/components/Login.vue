<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field v-model="username" label="Username"/><br>
          <v-text-field type="password" v-model="password" label="Password"/><br>
          <v-btn class="cyan" @click="login" dark>Login</v-btn>
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
    async login () { // calls for auth function login
      const response = await AuthenticationService.login({
        username: this.username,
        password: this.password
      })
      this.$store.dispatch('setToken', response.data._id)
      this.$store.dispatch('setUser', response.data.username)
      this.error = response.data.error
      console.log(response.data._id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>