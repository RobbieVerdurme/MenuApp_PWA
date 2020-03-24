<template>
  <md-list>
    <md-list-item v-for="item in list" :key="item.id">
      <menuListItem :item.sync="item" />
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  components: {
    menuListItem: () => import('~/components/molecules/menu-list-item')
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
