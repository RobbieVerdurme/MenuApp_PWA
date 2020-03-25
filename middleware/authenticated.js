export default function ({ store, redirect }) {
  if (!store.getters['user/getUser']) {
    return redirect('/login')
  }
}
