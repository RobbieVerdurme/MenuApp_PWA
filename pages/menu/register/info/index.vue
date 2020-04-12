<template>
  <editInfo :menu="menu" @setMenuTitle="setMenuTitle" @setMenuDescription="setMenuDescription" />
</template>

<script>
export default {
  components: {
    editInfo: () => import('~/components/molecules/registermenu-info')
  },
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  methods: {
    /**
     * set menu title
     */
    setMenuTitle (value) {
      this.menu.name = value
    },

    /**
     * set menu desciption
     */
    setMenuDescription (value) {
      this.menu.discritpion = value
    }
  }
}
</script>
