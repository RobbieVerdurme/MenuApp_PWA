<template>
  <md-list>
    <!--list of ingredients-->
    <md-list-item v-for="ingredient in menu.ingredients" :key="ingredient.id">
      <addIngredient :edit="true" :ingredient="ingredient" @editIngredient="editIngredient" @deleteIngredient="deleteIngredient" />
    </md-list-item>
    <!--/list of ingredients-->

    <!--Add new ingredient item-->
    <md-list-item>
      <addIngredient :edit="false" @addIngredient="addIngredient" />
    </md-list-item>
    <!--/Add new ingredient item-->
  </md-list>
</template>

<script>
export default {
  components: {
    addIngredient: () => import('~/components/molecules/registermenu-ingredient')
  },
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  methods: {
    /**
     * add ingredient to list of menu
     */
    addIngredient (value) {
      this.menu.ingredients.push(value)
    },

    /**
    * edit ingredient of list
    */
    editIngredient (value) {
      const index = this.menu.ingredients.indexOf(value.oldIngredient)
      this.menu.ingredients[index] = value.newIngredient
      alert('Edit ingredient ' + value.newIngredient.name)
    },

    /**
     * delete ingredient form list
     */
    deleteIngredient (value) {
      const index = this.menu.ingredients.indexOf(value)
      this.menu.ingredients.splice(index, 1)
    }
  }
}
</script>
