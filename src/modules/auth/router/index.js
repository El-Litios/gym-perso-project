export default {
    component: () => import(/* webpackChunkName: 'auth' */ '../layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'Log-in',
            component: () => import(/* webpackChunkName: 'auth-login' */ '../views/Login.vue')
        }
    ]
}