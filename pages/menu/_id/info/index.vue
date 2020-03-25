<template>
  <info :menu="menu" />
</template>

<script>
export default {
  components: {
    info: () => import('~/components/molecules/recipeinfo')
  },
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
