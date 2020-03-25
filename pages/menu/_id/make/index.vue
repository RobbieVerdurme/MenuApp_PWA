<template>
  <make :menu="menu" />
</template>

<script>
export default {
  components: {
    make: () => import('~/components/molecules/make')
  },
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
