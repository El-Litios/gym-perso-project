<template>
  <div>
        <Navbar/>
        <h1 class="text-center">Detalles de alumno</h1>

        <div class="d-flex justify-space-around mb-6">
            <h4><b>Rut: </b>{{student.rut}}</h4>
            <h4><b>Nombre: </b> {{student.name}} {{student.fatherLastName}} {{student.motherLastName}} </h4>
        </div>
        <div class="d-flex justify-space-around mb-6">
            <h4><b>Edad: </b>{{setAgeFromDate}}</h4>
            <h4><b>Teléfono: </b> {{student.phone}}</h4>
        </div>

        <Modal :idStudent="id" :age="setAgeFromDate" :gender="student.gender"/>
        <br>
        <div v-if="details">
            <div v-for="item in details" :key="item.id">
                <h5 class="text-center">
                    <b>IMC: </b> {{item.imc}} |
                    <b>Densidad Corporal: </b> {{item.bodydensity}} |
                    <b>Situación: </b> {{setInterval(item.imc)}} | 
                    <b>Fecha: </b> {{item.changedate}} | 
                    <b>Estatura: </b> {{item.height}} |
                    <b>Peso: </b> {{item.weight}} |
                    
                </h5>
            </div>
        </div>
        <div v-else>
            <h1 class="text-center">No hay nada</h1>
        </div>
        <Footer/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    components: {
        Navbar: () => import('../components/Navbar.vue'),
        Footer: () => import('../components/Footer.vue'),
        Modal: () => import('../components/ModalAddChanges.vue'),
    },

    methods: {
        ...mapActions('students', ['getStudentById','getDetails']),

        setInterval(imc){
            switch(true){
                case imc < 16:
                    return 'Ingreso Médico'
                case imc >= 16 && imc <= 16.9:
                    return 'Infrapeso'
                case imc >= 17 && imc <= 18.4:
                    return 'Bajo de peso'
                case imc >= 18.5 && imc <= 24.9:
                    return 'Saludable'
                case imc >= 25 && imc <= 29.9:
                    return 'Sobrepeso'
                case imc >= 30 && imc <= 34.9:
                    return 'Sobrepeso Crónico (Obesidad 1°)'
                case imc >= 35 && imc <= 39.9:
                    return 'Obesidad Premórbida (Obesidad 2°)'
                case imc >= 40 && imc <= 45:
                    return 'Obesidad Mórbida (Obesidad 3°)'
                case imc > 45:
                    return 'Obesidad Hipermórbida (Obesidad 4°)'
            }
        }
    },

    computed: {
        ...mapState('students', ['student','details']),

        setAgeFromDate(){
            const newDate = new Date(this.student.birthdate)
            const monthDiff = Date.now() - newDate.getTime()
            const dateFormat = new Date(monthDiff)
            const year = dateFormat.getUTCFullYear()
            const age = Math.abs(year - 1970)
            return age
        },

        
    },

    created() {
        this.getStudentById(this.id)
        this.getDetails(this.id)
    },

    watch: {
        id(){
            this.getDetails()
        }
    }

}
</script>

<style>

</style>