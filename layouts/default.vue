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
.md-app-content {
  background-image: linear-gradient(to bottom, rgb(255, 255, 255, 0.9) 0%,rgba(255, 255, 255,0.9) 100%), url('/images/Background_Ingedients.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
}
</style>
