<template>
  <nuxt-link :to="{name: 'menu-id-info', params: {id: item.key} }" class="contentwith">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            {{ item.name }}
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>{{ item.discritpion }}</md-card-content>
    </md-card>
  </nuxt-link>
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
.contentwith {
  width: 100%;
}
</style>
