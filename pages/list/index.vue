<template>
  <div>
    <vFilter @filterListTextChanged="filterList" />
    <md-content class="md-scrollbar">
      <menuList v-if="menulist" :list.sync="menulist" />
    </md-content>
  </div>
</template>

<script>
export default {
  middleware: 'data',
  components: {
    menuList: () => import('~/components/organisms/list'),
    vFilter: () => import('~/components/molecules/filter')
  },
  data () {
    return {
      menulist: this.$store.getters['menus/getAllMenuItems']
    }
  },
  methods: {
    /**
     * @param {String} string value of the filter
     * filter list with de value that has been given
     */
    filterList (value) {
      this.menulist = this.$store.getters['menus/getAllMenuWithFilter'](value.toString())
    }
  }
}
</script>
<style scoped>
  .md-content {
    max-height: 70vh;
    overflow: auto;
  }
</style>
