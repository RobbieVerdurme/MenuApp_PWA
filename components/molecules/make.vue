<template>
  <md-card>
    <md-card-content>
      <md-field>
        <md-textarea v-model="menu.preperation" md-autogrow disabled />
      </md-field>
    </md-card-content>
  </md-card>
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
