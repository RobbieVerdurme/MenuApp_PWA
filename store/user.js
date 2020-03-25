/**
 * state
 */
export const state = () => ({
  user: null
})

/**
 * getters
 */
export const getters = {
  /**
  * get loggedin user
  */
  getUser: (state) => {
    return state.user
  }
}

/**
 * mutations
 */
export const mutations = {
  /**
   * set user
   * @param {*} state
   * @param {object} payload
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
  * signin with email password
  * @param {*} param0
  * @param {object} signIn with prop email & password
  */
  async signIn ({ commit }, signIn) {
    try {
      const user = await this.$fireAuth.signInWithEmailAndPassword(signIn.email, signIn.password)
      commit('setUser', user.user)
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
      commit('setUser', null)
    } catch (e) {
      throw new Error(e)
    }
  }
}
