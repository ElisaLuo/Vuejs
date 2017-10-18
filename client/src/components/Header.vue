<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'home'})">TabTracker</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat @click="navigateTo({name: 'songs'})">Browse</v-btn>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})">Login</v-btn>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})">Register</v-btn>
      <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout()">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'home'})
    }
  }
}
</script>
 
<style scoped>
  .home{
    cursor: pointer;
  }
</style>
