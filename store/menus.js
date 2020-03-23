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
  getMenuListLength: state => state.menus.length
}
