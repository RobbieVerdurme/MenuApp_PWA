export default async function ({ store }) {
  if (!store.getters['menus/getMenuListLength']) {
    await store.dispatch('menus/getMenusFromFirebase')
  }
}
