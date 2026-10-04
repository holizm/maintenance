export default [
    {
        children: [
            {
                path: '/maintenance/maintenanceRequest/list',
                title: 'requests',
            },
            {
                path: '/maintenance/maintenancePlan/list',
                title: 'plans',
            },
            {
                path: '/maintenance/workOrder/list',
                title: 'workOrders',
            },
        ],
        icon: 'build',
        path: '/maintenance',
        title: 'maintenance',
    },
]
