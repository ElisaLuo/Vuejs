<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'home'})">TabTracker</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat v-if="$store.state.isUserLoggedIn">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})">Login</v-btn>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})">Register</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
 
<style scoped>
  .home{
    cursor: pointer;
  }
</style>
