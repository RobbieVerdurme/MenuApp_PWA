<template>
  <editPreperation :menu="menu" @setMenuPreperation="setMenuPreperation" />
</template>

<script>
export default {
  components: {
    editPreperation: () => import('~/components/molecules/registermenu-preperation')
  },
  props: {
    menu: Object
  },
  methods: {
    /**
     * set menu perperation
     */
    setMenuPreperation (value) {
      this.menu.preperation = value
    }
  }
}
</script>

<style>

</style>
