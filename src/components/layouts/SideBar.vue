<template>
  <div class="flex-initial flex flex-col w-60 text-prussian-blue divide-y">
    <template v-for="note in this.notes" :key="note.title">
      <router-link :to="{ name: 'open.note', params: { note: note.id }}">
        <div :class="
        'px-2 py-4 text-center hover:bg-alabaster'
        + (note.id.toString() === this.$route.params.id ? 'bg-neutral-800' : '')
        ">
          {{ note.title }}
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    notes: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>