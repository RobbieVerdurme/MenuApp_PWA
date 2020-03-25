<template>
  <md-list>
    <md-list-item class="md-elevation-2">
      <md-field>
        <md-textarea v-model="menu.preperation" md-autogrow disabled />
      </md-field>
    </md-list-item>
  </md-list>
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
