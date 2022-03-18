import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {authen} from './firebase'


Vue.config.productionTip = false

authen.onAuthStateChanged(user => {
  if (user) {
    const userDetection = {
      email: user.email,
      id: user.uid
    }
    store.dispatch('auth/detectUser', userDetection)
  }else{
    console.log(user);
    store.dispatch('auth/detectUser', user)
  }
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
