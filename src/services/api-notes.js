import fakeNotes from "@/fake/notes";

const apiNotes = {
    async getNoteInfo(id) {
        return fakeNotes.find(el => el.id.toString().trim() === id.toString().trim())
    },
    async getShortInfo(id) {
        return this.getNoteInfo(id)
    },

    async save(note) {
        return note.id;
    }
}

export default apiNotes