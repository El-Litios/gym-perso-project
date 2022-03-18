export default {
    component: () => import(/* webpackChunkName: 'auth' */ '../layouts/AuthLayout.vue'),
    children: [
        {
            path: 'login',
            name: 'Log-in',
            component: () => import(/* webpackChunkName: 'auth-login' */ '../views/Login.vue')
        }
    ]
}