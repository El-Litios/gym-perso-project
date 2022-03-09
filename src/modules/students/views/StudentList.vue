<template>
  <div>
        <Navbar />
        <hr>
        <h1 class="text-center">Listado de alumnos</h1>

        <Modal/>


        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-center">
                        Rut
                    </th>
                    <th class="text-center">
                        Nombre
                    </th>
                    <th class="text-center">
                        Gestion
                    </th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in students"
                    :key="item.id"
                    >
                        <td class="text-center">{{ item.rut }}</td>
                        <td class="text-center">{{ item.name }} {{ item.fatherLastName }} {{item.motherLastName}} </td>
                        <td class="text-center">
                            <v-btn x-small color="red darken-1" class="white--text"  @click="deleteStudents(item.id);" >Eliminar</v-btn> 
                            <v-btn x-small color="blue darken-1" class="white--text" @click="$router.push({ name: 'StudentDetails', params: { id: item.id } })">Detalles</v-btn>
                        </td>
                    
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <Footer />
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Swal from 'sweetalert2'

export default {
    components: {
        Navbar: () => import('../components/Navbar.vue'),
        Footer: () => import('../components/Footer.vue'),
        Modal: () => import('../components/ModalAddStudent.vue'),
    },

    created() {
        this.getStudents()
    },

    computed: {
        ...mapState('students', ['students'])
    },

    methods: {
        ...mapActions('students', ['deleteStudent', 'getStudents']),

        async deleteStudents(id){
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

                this.deleteStudent(id)

                Swal.fire('Registro Borrado', '', 'success')
            }
        }
    }

}
</script>

<style>

</style>