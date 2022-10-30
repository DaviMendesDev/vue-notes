import notes from "@/routes/notes";
import WorkspaceLayout from "@/components/layouts/WorkspaceLayout";

export default [
    {
        path: '/workspace/:workspace',
        component: WorkspaceLayout,
        name: 'open.workspace',
        children: [
            ...notes
        ]
    },
]
