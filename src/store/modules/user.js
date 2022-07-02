import mut from '../mutation-types'

const state = {
  info: {
    card: '',
    name: '',
    department: '',
    permission: null
  },
  jwt: ''
}

const mutations = {
  [mut.user.USER_LOGOUT](state) {
    const obj = state
    obj.info = {
      card: '',
      name: '',
      department: '',
      permission: null
    }
    obj.jwt = ''
  },
  [mut.user.USER_SET_INFO](state, info) {
    const obj = state
    obj.info = info
  },
  [mut.user.USER_SET_JWT](state, jwt) {
    const obj = state
    obj.jwt = jwt
  }
}

export default {
  state,
  mutations
}
