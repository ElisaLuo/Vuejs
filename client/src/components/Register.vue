<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <v-text-field v-model="username" label="Username" required/><br>
        <v-text-field type="password" v-model="password" label="Password" required/><br>
        <v-btn class="cyan" @click="register" dark>Register</v-btn>
        <p class="err">{{error}}</p>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
// imports service
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
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
      this.error = response.data.error
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
