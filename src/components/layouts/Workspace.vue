<template>
  <div class="flex flex-col text-neutral-50 h-full">
    <div class="flex flex-row h-full">
      <side-bar :notes="notes.filter(el => el.workspace_id.toString() === this.$route.params.workspace)"></side-bar>
      <div class="flex-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/layouts/SideBar";
import fakeNotes from "@/fake/notes";

export default {
  name: "WorkspaceLayout",
  data() {
    return {
      notes: fakeNotes,
    }
  },
  components: {
    SideBar,
  },
}
</script>

<style scoped>
</style>