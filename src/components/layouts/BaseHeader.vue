<template>
  <header class="text-lg mx-auto bg-neutral-800">
    <nav class="flex space-between">
      <div class="flex-initial flex flex-col" ref="">
        <div class="text-neutral-400 rounded mx-4 my-1 cursor-pointer hover:bg-neutral-700">
          <button @click="this.displayWorkspaces = ! this.displayWorkspaces"
                  @focusout="this.displayWorkspaces = false"
                  class="flex-initial px-4 py-2" role="button" type="button">
            <span class="inline-block mx-4">
              Workspaces
            </span>
            <span class="inline-block mx-4">
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </span>
          </button>
        </div>
        <div v-show="displayWorkspaces"
             class="flex-1 relative mx-4">
          <div class="absolute w-full top-0 left-0 my-1 rounded-b bg-neutral-800 text-neutral-400 flex flex-col">
            <template v-for="workspace in workspaces" :key="workspace.name">
              <div class="relative hover:bg-neutral-700">
                <div class="py-2 px-4 hover:bg-neutral-700 truncate">
                  <span v-text="workspace.name"></span>
                </div>
                <a :href="'/goto/workspace' + workspace.name" class="absolute top-0 right-0 w-full h-full"></a>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="flex-auto">
        <div class="flex flex-row-reverse">
          <div class="my-2 mx-8 py-2 px-4 rounded cursor-pointer text-neutral-400 text-sm hover:bg-neutral-700"
            v-text="showState()"
            @click="changeInfoDisplay">
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { dateDisplay } from "@/components/layouts/contants/date";
const fakeWorkspaces = [
  {
    name: 'Workspace 13'
  },
  {
    name: 'Workspace 12333'
  },
  {
    name: 'Workspace 12312312331231231232'
  },
]

export default {
  name: "BaseHeader",
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
  data() {
    return {
      currentTime: new Date(),
      displayMode: 1,
      workspaces: fakeWorkspaces,
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