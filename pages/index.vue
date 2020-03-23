<template>
  <picker />
</template>

<script>
export default {
  components: {
    picker: () => import('~/components/molecules/picker')
  }
}
</script>
