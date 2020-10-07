<template>
  <div>
    <h3>Child</h3>
    <p>{{ msg }}</p>
    <button @click="sendMsg">走你</button>
    <h3>{{ childMsg }}</h3>
  </div>
</template>

<script>
import bus from '../util/bus'
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      childMsg: 'child msg'
    }
  },
  methods: {
    sendMsg () {
      // 子传父
      this.$emit('showMsg', 'I am from son')
    }
  },
  mounted () {
    bus.$on('appMsg', (val) => {
      this.childMsg = val
    })
  }
}
</script>

<style scoped>
</style>
