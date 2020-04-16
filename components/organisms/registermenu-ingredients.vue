<template>
  <md-list>
    <!--list of ingredients-->
    <md-list-item v-for="ingredient in menu.ingredients" :key="ingredient.id">
      <registerIngredient :edit="true" :ingredient="ingredient" />
    </md-list-item>
    <!--/list of ingredients-->

    <!--Add new ingredient item-->
    <md-list-item>
      <registerIngredient :edit="false" />
    </md-list-item>
    <!--/Add new ingredient item-->
  </md-list>
</template>

<script>
export default {
  components: {
    registerIngredient: () => import('~/components/molecules/registermenu-ingredient')
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
