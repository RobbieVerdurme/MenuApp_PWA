/**
 * getters
 */
export default {
  /** *******************USER********************** */
  /**
    * get loggedin user
    */
  getLogin: (state) => {
    return state.loggedin
  },

  /** *******************MENU********************** */
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
