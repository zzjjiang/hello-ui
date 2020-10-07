<template>
  <div id="app">
    <button @click="sendMsg">app传值</button>
    <m-parent></m-parent>
  </div>
</template>

<script>
import bus from './util/bus'
import MParent from './views/Parent'
export default {
  components: {
    MParent
  },
  methods: {
    sendMsg () {
      bus.$emit('appMsg', 'i am from app')
    }
  }
}
</script>

<style>
</style>
