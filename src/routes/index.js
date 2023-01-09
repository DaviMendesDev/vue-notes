import notes from "@/routes/notes";
import WorkspaceLayout from "@/components/layouts/Workspace";
import BaseLayout from "@/components/layouts/BaseLayout";

export default [
    {
        path: '/',
        component: BaseLayout,
        children: [
            {
                path: '/workspace/:workspace',
                component: WorkspaceLayout,
                name: 'open.workspace',
                children: [
                    ...notes
                ]
            }
        ]
    }
]
