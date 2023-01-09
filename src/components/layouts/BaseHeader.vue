<template>
  <header class="text-lg text-alabaster bg-prussian-blue">
    <nav class="flex space-between">
      <div class="flex-initial flex flex-col" @focusout="this.displayWorkspaces = false">
        <div class="rounded flex-initial mx-4 my-1 cursor-pointer">
          <button @click="this.displayWorkspaces = ! this.displayWorkspaces"
                  class="flex flex-cols px-4 py-2 w-56 hover:bg-indigo-dye rounded" role="button" type="button">
            <span class="inline-block flex-auto mx-4 truncate">
              Workspaces
            </span>
            <span class="inline-block flex-initial mx-4">
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </span>
          </button>
        </div>
        <div class="relative mx-4">
            <div
                class="absolute flex-auto text-alabaster bg-prussian-blue w-full top-0 left-0
                      my-1 rounded-b flex flex-col ease-in-out duration-300 overflow-hidden"
                :style="{ transitionProperty: 'height', height: (this.displayWorkspaces) ? '10rem' : '0' }">

              <div class="overflow-scroll">
                <template v-for="workspace in workspaces" :key="workspace.id">
                  <router-link :to="{ name: 'open.workspace', params: { workspace: workspace.id } }" class="hover:bg-indigo-dye rounded">
                    <div class="py-2 px-4 truncate">
                      <span v-text="workspace.name"></span>
                    </div>
                  </router-link>
                </template>
              </div>
            </div>
        </div>
      </div>
      <div class="flex-auto">
        <div class="flex flex-row-reverse">
          <div class="my-2 mx-8 py-2 px-4 rounded cursor-pointer text-sm hover:bg-indigo-dye"
            v-text="showState()"
            @click="changeInfoDisplay">
          </div>
          <div>
            <span class="text-neutral-300"
                  v-text="this.$store.state.user.name">
            </span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { dateDisplay } from "@/constants/date";
import apiWorkspaces from "@/services/api-workspaces";

export default {
  name: "BaseHeader",
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

    apiWorkspaces.myWorkspaces()
        .then(workspaces => { this.workspaces = workspaces })
  },
  data() {
    return {
      currentTime: new Date(),
      displayMode: 1,
      workspaces: [],
      displayWorkspaces: false,
    }
  },
  methods: {
    showState() {
      if (this.displayMode === dateDisplay.DATE_TIME)
        return this.currentTime.toLocaleString()

      if (this.displayMode === dateDisplay.TIME)
        return this.currentTime.toLocaleTimeString()

      if (this.displayMode === dateDisplay.DATE)
        return this.currentTime.toLocaleDateString()
    },
    changeInfoDisplay() {
      if (this.displayMode >= dateDisplay.MAX_LENGTH) {
        this.displayMode = 1
        return
      }

      this.displayMode++
    },
  }
}
</script>

<style scoped>

</style>