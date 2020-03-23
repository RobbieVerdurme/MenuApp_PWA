<template>
  <md-content class="md-scrollbar">
    <menuList v-if="menulist" :list="menulist" />
  </md-content>
</template>

<script>
export default {
  components: {
    menuList: () => import('~/components/molecules/list')
  },
  computed: {
    menulist () {
      return this.$store.getters['menus/getAllMenuItems']
    }
  }
}
</script>
<style scoped>
  .md-content {
    max-height: 80vh;
    overflow: auto;
  }
</style>
