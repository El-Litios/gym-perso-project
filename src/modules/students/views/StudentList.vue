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
                            <v-btn x-small color="red darken-1" class="white--text"  @click="confirm(); deleteStudent(item.id);" >Eliminar</v-btn> |
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

export default {
    components: {
        Navbar: () => import('../components/Navbar.vue'),
        Footer: () => import('../components/Footer.vue'),
        Modal: () => import('../components/Modal.vue'),
    },

    created() {
        this.getStudents()
    },

    computed: {
        ...mapState('students', ['students'])
    },

    methods: {
        ...mapActions('students', ['deleteStudent', 'getStudents']),

        confirm(){
            return confirm('Desea borrar el registro?')
        }
    }

}
</script>

<style>

</style>