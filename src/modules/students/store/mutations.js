export const setStudents =  (state, payload) => {
    state.students = [...state.students, ...payload]
} 

export const unsetStudentAfterDelete = (state, payload) => {
    state.students = state.students.filter(s => s.id !== payload)
}