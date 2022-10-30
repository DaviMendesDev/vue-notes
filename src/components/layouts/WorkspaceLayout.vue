<template>
  <div class="flex flex-col text-neutral-50 h-full">
    <base-header :current-workspace="currentWorkspace"></base-header>
    <div class="flex flex-row h-full">
      <side-bar :notes="notes.filter(el => el.workspace_id.toString() === this.$route.params.workspace)"></side-bar>
      <div class="flex-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/layouts/BaseHeader";
import SideBar from "@/components/layouts/SideBar";
import fakeNotes from "@/fake/notes";
import apiWorkspaces from "@/services/api-workspaces";

export default {
  name: "WorkspaceLayout",
  mounted() {
    apiWorkspaces.getWorkspaceShortInfo(this.$route.params.workspace)
        .then(current => this.currentWorkspace = current)
  },
  data() {
    return {
      notes: fakeNotes,
      currentWorkspace: {},
    }
  },
  beforeRouteUpdate(to) {
    apiWorkspaces.getWorkspaceShortInfo(to.params.workspace)
        .then(current => this.currentWorkspace = current)
  },
  components: {
    BaseHeader,
    SideBar,
  },
}
</script>

<style scoped>
</style>