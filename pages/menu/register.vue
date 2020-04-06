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
    <md-button class="md-fab md-accent" @click="addMenu">
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
        ingredients: []
      },
      err: ''
    }
  },
  methods: {
    addMenu () {
      // check props
      if (this.validateMenu()) {
        // add to firebase
        this.$store.dispatch('menus/writeMenuToFirebase', this.menu)
      } else {
        this.err = 'Error'
      }
    },
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
