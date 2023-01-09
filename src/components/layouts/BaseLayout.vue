<template>
  <base-header></base-header>
  <router-view />
</template>

<script>
import BaseHeader from './BaseHeader'

export default {
  name: "BaseLayout",
  components: {
    BaseHeader
  },
}
</script>

<style scoped>

</style>