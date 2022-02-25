export default {
    component: () => import(/* webpackChunkName: 'students' */ '../layouts/StudentsLayout.vue'),
    children: [
        {
            path: 'studentlist',
            name: 'StudentsList',
            component: () => import(/* webpackChunkName: 'studentlist' */ '../views/StudentList.vue')
        }
    ]
}