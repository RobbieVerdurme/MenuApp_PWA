<template>
  <button @click="logout">
    Logout
  </button>
</template>

<script>
export default {
  middleware: 'authenticated',
  methods: {
    logout () {
      this.$store.dispatch('user/signOut')
        .then(() => {
          this.$router.push({ name: 'login' })
        }).catch((err) => {
          alert(err)
        })
    }
  }
}
</script>
