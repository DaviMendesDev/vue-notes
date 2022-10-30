<template>
  <div class="w-full h-full flex flex-row" @scroll="handleCodeScroll" ref="editorContainer">
    <textarea contenteditable="true" class="flex-auto alabaster text-neutral-400 px-20 py-10"
              @keydown="preventTab"
              v-model="note.content"
              placeholder="Type something here..."
              ref="codeTextArea">

    </textarea>
  </div>
</template>

<script>
import apiNotes from "@/services/api-notes";

export default {
  name: 'NoteElement',
  async beforeRouteUpdate(to) {
    this.note = await apiNotes.getNoteInfo(to.params.note);
  },
  mounted() {
    apiNotes.getNoteInfo(this.$route.params.note.toString())
        .then((n) => {
          this.note = n
        })
  },
  data() {
    return {
      note: {},
    }
  },
  methods: {
    preventTab: function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.$refs.codeTextArea.selectionStart
        const end = this.$refs.codeTextArea.selectionEnd

        this.note.content = this.note.content.substr(0, start) + "\t" + this.note.content.substr(end)
        this.$refs.codeTextArea.selectionStart = this.$refs.codeTextArea.selectionEnd = start + 1;
      }
    }
  }
}
</script>

<style scoped>

</style>