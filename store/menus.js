/**
 * state
 */
export const state = () => ({
  menus: []
})

/**
 * getters
 */
export const getters = {
  /**
   * get menu item with id
   * @param {*} state
   * @param {number} id
   */
  getMenuitem: state => (id) => {
    return state.menus[id]
  },

  /**
   * get the max length of the menulist
   */
  getMenuListLength: state => state.menus.length,

  /**
   * get all menu items
   */
  getAllMenuItems: state => state.menus,

  /**
   * get menus with filter text
   */
  getAllMenuWithFilter: state => (filtertext) => {
    return state.menus.filter(m => m.title.includes(filtertext) || m.ingredients.find(i => i.title.includes(filtertext)))
  }
}

/**
 * mutations
 */
export const mutations = {
  /**
   * set menus with payload
   * @param {*} state
   * @param {Array} payload
   */
  setMenus (state, payload) {
    state.menus = payload
  }
}

/**
 * actions
 */
export const actions = {
  /**
   * get menus from firebase
   * @param {*} param0
   */
  async getMenusFromFirebase ({ commit }) {
    const messageRef = this.$fireDb.ref('FoodList')

    // get data
    let snap
    // eslint-disable-next-line no-useless-catch
    try {
      snap = await messageRef.once('value')
    } catch (e) {
      throw e
    }

    // convert json to array of objects
    const res = Object.keys(snap.val().Food).map(function (key) {
      return snap.val().Food[key]
    })

    commit('setMenus', res)
  }
}
