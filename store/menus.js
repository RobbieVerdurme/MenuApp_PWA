/**
 * state
 */
export const state = () => ({
  menus: [],
  selectedMenu: {}
})

/**
 * getters
 */
export const getters = {
  /**
   * get selected menu
   */
  getSelectedMenu: (state) => {
    return state.selectedMenu
  },

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
    return state.menus.filter(m => m.name.toLowerCase().includes(filtertext.toLowerCase()) || m.ingredients.find(i => i.name.toLowerCase().includes(filtertext.toLowerCase())))
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
  },

  /**
   * delete menu from the list
   * @param {*} state
   * @param {Object} payload
   */
  deleteMenu (state, payload) {
    const index = state.menus.indexOf(payload)
    state.menus.splice(index, 1)
  },

  /**
   * set key of selected menu
   * @param {*} state
   * @param {String} payload
   */
  setKeySelectedMenu (state, payload) {
    state.selectedMenu.key = payload
  },

  /**
   * set the selected menu
   * @param {*} state
   * @param {Object} payload
   */
  setSelectedMenu (state, payload) {
    state.selectedMenu = payload
  },

  /**
   * set name of menu
   * @param {*} state
   * @param {String} payload
   */
  setNameSelectedMenu (state, payload) {
    state.selectedMenu.name = payload
  },

  /**
   * set description of menu
   * @param {*} state
   * @param {String} payload
   */
  setDescriptionSelectedMenu (state, payload) {
    state.selectedMenu.discritpion = payload
  },

  /**
   * add ingredient to selected menu
   * @param {*} state
   * @param {Object} payload
   */
  addIngredientSelectedMenu (state, payload) {
    state.selectedMenu.ingredients.push(payload)
  },

  /**
   * edit ingredient of selected menu
   * @param {*} state
   * @param {Object} payload
   */
  editIngredientSelectedMenu (state, payload) {
    const index = state.selectedMenu.ingredients.indexOf(payload.oldIngredient)
    state.selectedMenu.ingredients[index] = payload.newIngredient
  },

  /**
   * delete ingredient from selected menu
   * @param {*} state
   * @param {Object} payload
   */
  deleteIngredientSelectedMenu (state, payload) {
    const index = state.selectedMenu.ingredients.indexOf(payload)
    state.selectedMenu.ingredients.splice(index, 1)
  },

  /**
   * set preperation of menu
   * @param {*} state
   * @param {String} payload
   */
  setPreperationSelectedMenu (state, payload) {
    state.selectedMenu.preperation = payload
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
  async writeMenuToFirebase ({ commit, state }) {
    const messageRef = this.$fireDb.ref('FoodList').child('Food')
    const chosenMenu = state.selectedMenu

    try {
      if (chosenMenu.key) {
        // update menu
        await messageRef.child(chosenMenu.key).update(chosenMenu.selectedMenu)
      } else {
        // generate key for menu
        const newKey = messageRef.push().key
        commit('setKeySelectedMenu', newKey)

        // add menu to firebase
        await messageRef.child(newKey).set(chosenMenu)
        commit('addMenu', chosenMenu)
      }
    } catch (e) {
      throw new Error(e)
    }
  },

  /**
   * delete menu
   */
  async deleteMenuFromFirebase ({ commit }, menu) {
    const messageRef = this.$fireDb.ref('FoodList').child('Food')
    try {
      await messageRef.child(menu.key).remove()
      commit('deleteMenu', menu)
    } catch (e) {
      throw new Error(e)
    }
  }
}
