<template>
  <div class="p-6 w-1/5 container mx-auto shadow-md">
    <form @submit.prevent="userSignIn">
      <h2 class="mb-2 text-xl text-green-500 font-bold">Sign In</h2>

      <div class="mb-4">
        <label class="block mb-2 text-gray-500" for="email">Email</label>
        <input id="email" v-model="email" class="border w-full px-2 py-1" type="text" >
      </div>

      <div class="mb-4">
        <label class="block mb-2 text-gray-500" for="password">Password</label>
        <input id="password" v-model="password" class="border w-full px-2 py-1" type="password" >
      </div>

      <button class="bg-green-500 text-white uppercase py-2 w-full shadow">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // eslint-disable-next-line handle-callback-err
    userSignIn (err) {
      this.$store.dispatch('users/signInWithEmail', { email: this.email, password: this.password })
        .then((user) => {
          this.email = ''
          this.password = ''
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  }
}
</script>
