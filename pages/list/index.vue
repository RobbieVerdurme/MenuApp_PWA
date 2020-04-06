<template>
  <div>
    <vFilter @filterListTextChanged="filterList" />
    <md-content class="md-scrollbar">
      <menuList v-if="menulist" :list.sync="menulist" />
    </md-content>
    <md-button v-if="this.$store.getters['user/getLogin']" class="md-fab md-accent" @click="addMenu">
      <md-icon>add</md-icon>
    </md-button>
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
    },

    /**
     * redirect to addmenu page
     */
    addMenu () {
      this.$router.push({ name: 'menu-register-info' })
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
