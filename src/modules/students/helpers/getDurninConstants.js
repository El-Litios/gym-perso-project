const getDurninConstants = (gender, age) => {
    if (gender === 'Maculino') {
        switch (true){
            //16-19 years old
          case age >=16 && age <=19:
              
            return {
                constantC: 1.1620,
                constantM: 0.0630
            }

            //20-29 years old
          case age >=20 && age <=28:
             
            return {
                constantC: 1.1631,
                constantM: 0.0632
            }

            //30-39 years old 
          case age >=30 && age <=39:
            
            return {
                constantC: 1.1422,
                constantM: 0.0544
            }

            //40-49 years old
          case age >=40 && age <=49:
             
            return {
                constantC: 1.1620,
                constantM: 0.0700
            }

            //50+ years old
          case age >=50:

            return {
                constantC: 1.1715,
                constantM: 0.0779
            }

        }
      }else{
        switch (true){
          //16-19 years old
          case age >=16 && age <=19:
              
            return {
                constantC: 1.1549,
                constantM: 0.0678
            }

            //20-29 years old
          case age >=20 && age <=28:
             
            return {
                constantC: 1.1599,
                constantM: 0.0717
            }

            //30-39 years old 
          case age >=30 && age <=39:
            
            return {
                constantC: 1.1423,
                constantM: 0.0632
            }

            //40-49 years old
          case age >=40 && age <=49:
             
            return {
                constantC: 1.1333,
                constantM: 0.0612
            }

            //50+ years old
          case age >=50:

            return {
                constantC: 1.1399,
                constantM: 0.0645
            }
            

        }
      }
}

export default getDurninConstants