export const userExists =  (state) => {
    if(state.user === null){
        return false
    }else{
        return true
    }
} 