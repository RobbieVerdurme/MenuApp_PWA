<template>
  <div>
    <md-tabs v-if="menu" md-sync-route>
      <md-tab id="tab-info" md-label="Info" :to="{name: 'menu-id-info', params: { id: menuId}}" exact />
      <md-tab id="tab-ingredients" md-label="Ingredients" :to="{name: 'menu-id-ingredients', params: {id: menuId}}" exact />
      <md-tab id="tab-make" md-label="Make" :to="{name: 'menu-id-make', params: {id: menuId}}" exact />
    </md-tabs>
    <nuxt-child :menu="menu" :ingredients="menu.ingredients" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuId: this.$route.params.id
    }
  },
  computed: {
    menu () {
      return this.$store.getters['menus/getMenuitem'](parseInt(this.menuId))
    }
  }
}
</script>
