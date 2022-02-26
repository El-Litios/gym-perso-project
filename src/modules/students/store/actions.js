import { db } from '../../../firebase'


export const getStudents = async ({commit,  rootState}) => {
    const students = []
    await db.collection(`${rootState.auth.user}/Userdata/students`).get()
        .then(res => {
            res.forEach(doc => {
                let data = doc.data()
                data.id = doc.id
                students.push(data)
            });
            commit('setStudents', students)
        })
        .catch(err => console.log(err))
} 