export default {
    component: () => import(/* webpackChunkName: 'students' */ '../layouts/StudentsLayout.vue'),
    children: [
        {
            path: 'studentlist',
            name: 'StudentsList',
            component: () => import(/* webpackChunkName: 'studentlist' */ '../views/StudentList.vue')
        },
        {
            path: ':id',
            name: 'StudentDetails',
            component: () => import(/* webpackChunkName: 'studentdetail' */ '../views/StudentDetail.vue'),
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}