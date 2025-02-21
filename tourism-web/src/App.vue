<template>
  <div id="app">
    <router-link to="/intro">SIGN IN</router-link>
    <router-link to="/home">Home</router-link>
    <router-link to="/museums">Museums</router-link>
    <router-link to="/restaurants">Restaurants</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Your styles here */
</style>
