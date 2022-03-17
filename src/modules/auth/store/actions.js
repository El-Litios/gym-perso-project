import { authen, db } from '../../../firebase'
import router from '../../../router'

export const loginUser = async ({commit}, userObj) => {
    await authen.signInWithEmailAndPassword(userObj.email, userObj.pass)
        .then(res => {
            const user = {
                email: res.user.email,
                id: res.user.uid
            }
            commit('setUserInfoFromLogin', user)
            router.push({ name: 'StudentsList'})
        })
        .catch(err => {
            console.log(err)
            /* const message = 'No existe'
            commit('setErrorFromLogin', message) */
        })
} 