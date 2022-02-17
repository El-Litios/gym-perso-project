import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../modules/auth/store'
import students from '../modules/students/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    students
  }
})
