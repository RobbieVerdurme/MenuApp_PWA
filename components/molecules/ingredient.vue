<template>
  <md-card>
    <md-card-content> {{ ingredient.name }} {{ ingredient.quantity }} {{ ingredient.measurement }} </md-card-content>
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
