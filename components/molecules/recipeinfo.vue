<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <b>{{ menu.name }}</b>
      </md-card-header-text>
    </md-card-header>
    <md-card-content> {{ menu.discritpion }} </md-card-content>
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
