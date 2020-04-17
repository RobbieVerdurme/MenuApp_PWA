/**
 * actions
 */
export default {
/** *******************USER********************** */
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
  },

  /** *******************MENU********************** */
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
