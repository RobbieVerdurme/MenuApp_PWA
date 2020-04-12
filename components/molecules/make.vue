<template>
  <md-field class="md-elevation-2">
    <md-textarea v-model="menu.preperation" md-autogrow disabled />
  </md-field>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
