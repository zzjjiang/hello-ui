<template>
  <div id="app">
    <!-- <button @click="sendMsg">app传值</button>
    <m-parent></m-parent> -->
    <router-link to='/home'>homelink</router-link>
    <button @click="toHome">homeBtn</button>
    <router-view />
  </div>
</template>

<script>
import bus from './util/bus'
// import MParent from './views/Parent'
export default {
  // components: {
  //   MParent
  // },
  methods: {
    sendMsg () {
      bus.$emit('appMsg', 'i am from app')
    },
    toHome () {
      // this.$router.push({ path: '/home', query: { name: 'zzj' } })
      this.$router.push({ name: 'home', params: { id: 11 } })
    }
  }
}
</script>

<style>
</style>
