<template>
  <picker class="app-content" />
</template>

<script>
export default {
  components: {
    picker: () => import('~/components/molecules/picker')
  }
}
</script>
<style scoped>
.app-content {
  min-height: 80vh;
}
</style>
