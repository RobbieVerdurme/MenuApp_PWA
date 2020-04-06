<template>
  <editIngredients :menu="menu" />
</template>

<script>
export default {
  components: {
    editIngredients: () => import('~/components/organisms/registermenu-ingredients')
  },
  props: {
    menu: Object
  }

}
</script>
