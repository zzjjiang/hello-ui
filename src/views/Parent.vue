<template>
  <div>
    <h3>parent</h3>
    <m-child v-bind:msg="'from parent mes'"
             @showMsg="thisMsg"></m-child>
    <h1>{{ msg }}</h1>
    <!-- <m-child msg='from parent mes'></m-child> -->
  </div>
</template>

<script>
import MChild from './Son'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    MChild
  },
  methods: {
    thisMsg (val) {
      this.msg = val
    }
  }
}
</script>

<style scoped>
</style>
