import { db } from '../../../firebase'


export const getStudents = async ({/* commit */ rootState}) => {
    const students = []
    await db.collection(`${rootState.auth.user}/Userdata/students`).get()
        .then(res => {
            res.forEach(doc => {
                console.log(doc.data());
            });
        })
        .catch(err => console.log(err))
} 