export const setStudents =  (state, payload) => {
    state.students = payload
} 

export const setStudentById = (state, payload) => {
    state.student = payload
}

export const unsetStudentAfterDelete = (state, payload) => {
    state.students = state.students.filter(s => s.id !== payload)
    state.details = []
}

export const setDetailsByStudentId = (state, payload) => {
    state.details = payload
    
} 