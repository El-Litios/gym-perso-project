export const getStudentsByTerm =  ( state ) => ( term = '') => {
    if (term.length === 0) {
        return state.students
    }
    
    return state.students.filter(e => e.name.toLowerCase().includes(term.toLocaleLowerCase()))
} 