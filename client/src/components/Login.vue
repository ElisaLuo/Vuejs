<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field v-model="username" label="Username"/><br>
        <v-text-field type="password" v-model="password" label="Password"/><br>
        <v-btn class="cyan" @click="login" dark>Login</v-btn>
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
    async login () { // calls for auth function login
      const response = await AuthenticationService.login({
        username: this.username,
        password: this.password
      })
      this.$store.dispatch('setToken', response.data._id)
      this.$store.dispatch('setUser', response.data.username)
      this.error = response.data.error
      console.log(response.data._id, response.data.error)
      if (response.data.error === undefined) {
        this.$router.push({name: 'home'})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>