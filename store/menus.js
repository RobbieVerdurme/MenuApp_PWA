/**
 * state
 */
export const state = () => ({
  menus: [
    { id: 1, title: 'test', content: 'ahahh', ingredients: [{ id: 1, title: 'test' }] }
  ]
})

/**
 * getters
 */
export const getters = {
  /**
   * get menu item with id
   */
  getMenuitem: state => (id) => {
    return state.menus.find(m => m.id === id)
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
