<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <vHeader />
      </md-app-toolbar>
      <md-app-content class="app-content">
        <nuxt />
      </md-app-content>
    </md-app>
    <vFooter />
  </div>
</template>

<script>
export default {
  components: {
    vHeader: () => import('~/components/organisms/header'),
    vFooter: () => import('~/components/organisms/footer')
  }
}
</script>
<style scoped>
.app-content {
  min-height: 90vh;
}
</style>
