<template>
  <editPreperation :menu="menu" />
</template>

<script>
export default {
  middleware: 'authenticated',
  components: {
    editPreperation: () => import('~/components/molecules/registermenu-preperation')
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

<style>

</style>
