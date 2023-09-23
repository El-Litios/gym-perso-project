const getFaulkerConstants = (gender) => {
    if (gender === 'Masculino') {
        return {
          constant_1: 0.153,
          constant_2: 5.783
        }
      }else{
        return {
          constant_1: 0.219,
          constant_2: 7.9
        }
      }
}

export default getFaulkerConstants