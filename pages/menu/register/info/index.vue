<template>
  <editInfo :menu="menu" />
</template>

<script>
export default {
  middleware: 'authenticated',
  components: {
    editInfo: () => import('~/components/molecules/registermenu-info')
  },
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>
