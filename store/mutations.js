/**
 * mutations
 */
export default {
/** *******************USER********************** */
  /**
 * set login
 * @param {*} state
 * @param {object} payload
 */
  setLogin (state, payload) {
    state.loggedin = payload
  },

  /** *******************MENU********************** */
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
