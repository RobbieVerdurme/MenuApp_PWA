<template>
  <md-card>
    <md-card-content> {{ ingredient.title }} {{ ingredient.quantitiy }} {{ ingredient.mesurement }} </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    ingredient: {
      type: Object,
      required: true
    }
  }
}
</script>
