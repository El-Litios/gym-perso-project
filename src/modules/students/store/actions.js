import { db } from '../../../firebase'
import router from '../../../router'


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

export const getStudentById = async ({commit, rootState}, id) => {
    await db.collection(`${rootState.auth.user}/Userdata/students`).doc(id).get()
        .then(res => {
            const student = {
                rut: res.data().rut,
                name: res.data().name,
                fatherLastName: res.data().fatherLastName,
                motherLastName: res.data().motherLastName,
                birthdate: res.data().birthdate,
                phone: res.data().phone,
                gender: res.data().gender
            }
            commit('setStudentById', student)
        })
        .catch(err => console.log(err))
}


export const createStudent = async ({rootState}, student) => {
    await db.collection(`${rootState.auth.user}/Userdata/students`).add({
        rut: student.rut,
        name: student.name,
        fatherLastName: student.flname,
        motherLastName: student.mlname,
        phone: student.phone,
        birthdate: student.birthdate,
        gender: student.gender
    })
    .then(() => {
        router.go()
    })
    .catch(err => console.log(err))
}

export const deleteStudent = async({commit, rootState}, id) => {
    await db.collection(`${rootState.auth.user}/Userdata/students`).doc(id).delete()
    .then(() => {
        commit('unsetStudentAfterDelete', id)
    })
    .catch(err => console.log(err))
}

export const getDetails = async({commit , rootState}, id) => {
    const details = []
    await db.collection(`${rootState.auth.user}/Userdata/students/${id}/changes`).orderBy("changedate","desc").get()
    .then(res => {
        res.forEach(doc => {
            let data = doc.data()
            data.id = doc.id
            details.push(data)
        })
        commit('setDetailsByStudentId', details)
    })
    .catch(err => console.log(err))
}

export const createNewChange = async({commit, rootState}, obj) => {
    await db.collection(`${rootState.auth.user}/Userdata/students/${obj.idStudent}/changes`).add({
        weight: obj.weight,
        height: obj.height,
        changedate: obj.changedate,
        bodydensity: obj.bodydensity,
        imc: obj.imc,
    })
    .then(() => {
        router.go()
    })
    .catch(err => console.log(err))
    
}

export const deleteChange = async({commit, rootState}, obj) => {
    await db.collection(`${rootState.auth.user}/Userdata/students/${obj.idStudent}/changes`).doc(obj.idChange).delete()
    .then(() => {
        commit('unsetCahngeAfterDelete', obj.idChange)
    })
    .catch(err => console.log(err))
}