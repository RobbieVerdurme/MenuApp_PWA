export default async function ({ store }) {
  if (!store.getters.getMenuListLength) {
    await store.dispatch('getMenusFromFirebase')
  }
}
