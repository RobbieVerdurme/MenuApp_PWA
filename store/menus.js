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
