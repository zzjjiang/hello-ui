<template>
  <div>
    <h3>parent</h3>
    <m-child v-bind:msg="'from parent mes'"
             @showMsg="thisMsg"></m-child>
    <h1>{{ msg }}</h1>
    <h1>vuex</h1>
    <h2>{{count}}</h2>
    <h1>vuex getter</h1>
    <h2>{{doubleCount}}</h2>
    <button @click='add'>add</button>
    <!-- <m-child msg='from parent mes'></m-child> -->
  </div>
</template>

<script>
import MChild from './Son'
import { mapState } from 'vuex'
export default {
  // computed: {
  //   count1 () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count: 'count',
  //   total: 'total'
  // }),
  computed: {
    ...mapState({

      count: state => state.test.count,
      total: state => state.test.total
    }),
    doubleCount () {
      return this.$store.getters.doubleCount
    }
  },
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
    },
    add () {
      this.$store.commit('add')
      // dispatch 触发action
      // this.$store.dispatch('delayAdd')
    }
  }
}
</script>

<style scoped>
</style>
