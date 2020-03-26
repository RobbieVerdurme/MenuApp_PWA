export default function ({ store, redirect }) {
  if (!store.getters['user/getLogin']) {
    return redirect('/login')
  }
}
