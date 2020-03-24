// imports
import { auth } from '~/plugins/firebase.js'
/**
 * state
 */
export const state = () => ({
  user: ''
})

/**
 * getters
 */
export const getters = {
  /**
  * getuser
  */
  user: (state) => {
    return state.user
  },

  /**
  * is the user authenicated
  */
  isAuthenticated: (state) => {
    return !!state.user
  }
}

/**
 * mutations
 */
export const mutations = {
  /**
  * setuser
  */
  setUser (state, payload) {
    state.user = payload
  }
}

/**
 * actions
 */
export const actions = {
  /**
   * register user
   */
  signUp ({ commit }, { email, password }) {
    return auth.createUserWithEmailAndPassword(email, password)
  },

  /**
   * sign in with email
   */
  signInWithEmail ({ commit }, { email, password }) {
    return auth.signInWithEmailAndPassword(email, password)
  },

  /**
   * signout
   */
  signOut () {
    return auth.signOut()
  }
}
