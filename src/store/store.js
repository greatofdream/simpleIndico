import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
// import base from './modules/base'

Vue.use(Vuex)

// Example:
// import user from './modules/user'

export default new Vuex.Store({
  modules: {
    user,
    // base
  }
})
