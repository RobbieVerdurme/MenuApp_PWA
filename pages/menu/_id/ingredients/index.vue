<template>
  <ingredients :ingredients="ingredients" />
</template>

<script>
export default {
  components: {
    ingredients: () => import('~/components/organisms/ingredients')
  },
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  }
}
</script>
