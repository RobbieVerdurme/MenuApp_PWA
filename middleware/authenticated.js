export default function ({ store, redirect }) {
  if (!store.getters.getLogin) {
    return redirect('/login')
  }
}
