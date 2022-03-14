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

        <div class="d-flex justify-center mb-6">
            <Modal :idStudent="id" :age="setAgeFromDate" :gender="student.gender"/> ||| 
            <ModalTable :gender="student.gender"/>
        </div>

        <br>
        <v-container>
            <div v-for="item in details" :key="item.id">
                <v-card
                    color="grey lighten-5"
                    elevation="11"
                >
                    <v-card-title class="text-h6 text-center">
                        Fecha: {{item.changedate}}
                    </v-card-title>
                        
                    <v-card-subtitle class="text-center">
                        <div class="d-flex justify-space-around mb-6 ">
                            <h4><b>Estatura:</b> {{item.height}}</h4>
                            <h4><b>Peso:</b> {{item.weight}}</h4>
                            <h4><b>IMC:</b> {{item.imc}}</h4>
                        </div>
                        <div class="d-flex justify-space-around mb-6">
                            <h4><b>% de grasa:</b> {{item.averagefat}}</h4>
                            <h4><b>Situación:</b> {{setInterval(item.imc)}}</h4>
                        </div>
                        <div class="d-flex justify-space-around mb-6">
                            <h4><b>Masa muscular:</b> {{item.averagemass}}</h4>
                            <h4 v-if="student.gender === 'Femenino'"><b>Cintura/Caderas:</b> {{item.waisthip}}</h4>
                        </div>
                    </v-card-subtitle>

                    <v-card-actions style="justify-content: center">
                        <v-btn text color="red" elevation="1" @click="saveDelete(item.id)">
                            Borrar
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <br>
            </div>
        </v-container>
        <Footer/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            obj: {}
        }
    },

    components: {
        Navbar: () => import('../components/Navbar.vue'),
        Footer: () => import('../components/Footer.vue'),
        Modal: () => import('../components/ModalAddChanges.vue'),
        ModalTable: () => import('../components/ModalShowTable.vue'),
    },

    methods: {
        ...mapActions('students', ['getStudentById','getDetails','deleteChange']),

        setInterval(imc){
            switch(true){
                case imc < 16:
                    return 'Ingreso Médico'
                case imc >= 16 && imc <= 16.99:
                    return 'Infrapeso'
                case imc >= 17 && imc <= 18.4:
                    return 'Bajo de peso'
                case imc >= 18.5 && imc <= 24.99:
                    return 'Saludable'
                case imc >= 25 && imc <= 29.99:
                    return 'Sobrepeso'
                case imc >= 30 && imc <= 34.99:
                    return 'Sobrepeso Crónico (Obesidad 1°)'
                case imc >= 35 && imc <= 39.99:
                    return 'Obesidad Premórbida (Obesidad 2°)'
                case imc >= 40 && imc <= 45:
                    return 'Obesidad Mórbida (Obesidad 3°)'
                case imc > 45:
                    return 'Obesidad Hipermórbida (Obesidad 4°)'
            }
        },

        async saveDelete(idChange){
            const alert = await Swal.fire({
                title: 'Estás seguro de borrar el registro?',
                text: 'Al ser borrado, no hay vuelta atras!',
                showDenyButton: true,
                confirmButtonText: 'Aceptar'
            })
            
            if (alert.isConfirmed) {
                new Swal({
                    title: 'Un momento...',
                    allowOutsideClick: false
                })

                Swal.showLoading()

                this.obj.idStudent = this.id 
                this.obj.idChange = idChange

               await this.deleteChange(this.obj)

                Swal.fire('Registro Borrado', '', 'success')
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