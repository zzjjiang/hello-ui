export default ({
  state: {
    count: 1,
    total: 100
  },
  getters: {
    doubleCount: state => {
      return state.count * 2
    }
  },
  mutations: {
    add (state) {
      state.count++
    },
    decrease (state) {
      state.count--
    }
  },
  actions: {
    delayAdd (context) {
    // 调用mutations
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    }
  }
})
