import fakeWorkspaces from "@/fake/workspaces";

const apiWorkspaces = {
    async getWorkspaceShortInfo(id) {
        return fakeWorkspaces.find(el => el.id.toString().trim() === id.toString().trim())
    },
    async myWorkspaces() {
        return fakeWorkspaces
    }
};

export default apiWorkspaces
