export const setStudents =  (state, payload) => {
    state.students = [...state.students, ...payload]
} 