/**
 * state
 */
export const state = () => ({
  loggedin: false
})

/**
 * getters
 */
export const getters = {
  /**
  * get loggedin user
  */
  getLogin: (state) => {
    return state.loggedin
  }
}

/**
 * mutations
 */
export const mutations = {
  /**
   * set login
   * @param {*} state
   * @param {object} payload
   */
  setLogin (state, payload) {
    state.loggedin = payload
  }
}

/**
 * actions
 */
export const actions = {
  /**
  * signin with email password
  * @param {*} param0
  * @param {object} signIn with prop email & password
  */
  async signIn ({ commit }, signIn) {
    try {
      await this.$fireAuth.signInWithEmailAndPassword(signIn.email, signIn.password)
      commit('setLogin', true)
    } catch (e) {
      throw new Error(e)
    }
  },

  /**
   * signout
   */
  async signOut ({ commit }) {
    try {
      await this.$fireAuth.signOut()
      commit('setLogin', false)
    } catch (e) {
      throw new Error(e)
    }
  }
}
