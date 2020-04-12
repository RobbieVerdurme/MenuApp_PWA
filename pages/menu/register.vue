<template>
  <div>
    <p v-if="err" class="error">
      {{ err }} while adding menu
    </p>
    <md-tabs md-sync-route>
      <md-tab id="tab-register-info" md-label="Info" :to="{name: 'menu-register-info'}" exact />
      <md-tab id="tab-register-ingredients" md-label="Ingredients" :to="{name: 'menu-register-ingredients'}" exact />
      <md-tab id="tab-register-make" md-label="Make" :to="{name: 'menu-register-make'}" exact />
    </md-tabs>
    <nuxt-child
      :menu="menu"
    />
    <md-progress-bar v-if="sending" md-mode="indeterminate" />
    <md-button class="md-fab md-fab-top-right md-accent" @click="addMenu">
      <md-icon>save</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: {
        key: '',
        name: '',
        discritpion: '',
        preperation: '',
        ingredients: [],
        createrMenu: this.$fireAuth.currentUser.email
      },
      err: '',
      sending: false
    }
  },
  methods: {
    /**
     * add menu to firebase then redirect to list page
     */
    addMenu () {
      // check props
      if (this.validateMenu() && this.sending === false) {
        this.sending = true
        // add to firebase
        this.$store.dispatch('menus/writeMenuToFirebase', this.menu)
          .then(() => {
            this.$router.push({ name: 'list' })
          })
          .catch((err) => {
            this.err = err
            this.sending = false
          })
      } else if (this.sending === true) {
        this.err = 'Already sending'
      } else {
        this.err = 'Error'
      }
    },
    /**
     * validate menu to see if everything is filled in
     */
    validateMenu () {
      if (this.menu.name && this.menu.discritpion && this.menu.preperation && this.menu.ingredients.length) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
