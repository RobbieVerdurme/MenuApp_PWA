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
   * get menu item on place number
   */
  getMenuitem: state => (index) => {
    return state.menus[index]
  },

  /**
   * get menu item with id
   */
  getMenuitemWithId: state => (id) => {
    return state.menus.find(m => m.key === id)
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
    return state.menus.filter(m => m.name.includes(filtertext) || m.ingredients.find(i => i.name.includes(filtertext)))
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
  },

  /**
   * Add menu to local list
   * @param {*} state
   * @param {Object} payload
   */
  addMenu (state, payload) {
    state.menus.push(payload)
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
  },

  /**
   * write to firebase
   */
  async writeMenuToFirebase ({ commit }, menu) {
    const messageRef = this.$fireDb.ref('FoodList').child('Food')

    try {
      const newKey = messageRef.push().key

      menu.key = newKey
      await messageRef.child(newKey).set(menu)
    } catch (e) {
      throw new Error(e)
    }
    commit('addMenu', menu)
  }
}
