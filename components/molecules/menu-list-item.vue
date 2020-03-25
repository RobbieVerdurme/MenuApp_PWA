<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">
          {{ item.name }}
        </div>
      </md-card-header-text>
    </md-card-header>
    <md-card-content> {{ item.discritpion }} </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .md-card {
    width: 100%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
