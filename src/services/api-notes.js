import baseApi from "@/services/base-api";

const apiNotes = {
    getNoteInfo(id) {
        return baseApi().get(`/notes/${id}`).then(res => res.data).then(data => data.data)
    },

    async getMyNotes() {
        return baseApi().get('/notes/me').then(res => res.data).then(data => data.data)
    },

    async save(note) {
        return note.id;
    }
}

Object.freeze(apiNotes)

export default apiNotes