<template>
  <div>
    <vHeader />
    <nuxt />
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
