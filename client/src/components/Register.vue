<template>
  <div>
    <h1>Register</h1>
    <input type="username" v-model="username" name="username" placeholder="username"/><br>
    <input type="password" v-model="password" name="password" placeholder="password"/><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
// imports service
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async register () { // calls for auth function register
      const response = await AuthenticationService.register({
        username: this.username,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
