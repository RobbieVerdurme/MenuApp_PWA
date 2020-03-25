<template>
  <md-list>
    <md-list-item v-for="ingredient in ingredients" :key="ingredient.id">
      <ingredient :ingredient="ingredient" />
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  components: {
    ingredient: () => import('~/components/molecules/ingredient')
  },
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  }
}
</script>
