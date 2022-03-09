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

        <Modal/>
        <div v-if="details">
            <div v-for="item in details" :key="item.id">
                ID: {{item.id}} - GRASA: {{item.grasa}} - FECHA: {{item.date}}
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
        ...mapActions('students', ['getStudentById','getDetails'])
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
        }
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