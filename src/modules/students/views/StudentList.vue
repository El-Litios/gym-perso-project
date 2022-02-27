<template>
  <div>
        <Navbar />
        
        <h1>Lista</h1>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Rut
                    </th>
                    <th class="text-left">
                        Nombre
                    </th>
                    <th class="text-left">
                        Editar
                    </th>
                    <th class="text-left">
                        Eliminar
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in students"
                    :key="item.id"
                    >
                    <td>{{ item.rut }}</td>
                    <td>{{ item.name }} {{ item.lastname }}</td>
                    <td>
                        <v-btn color="yellow accent-3" >Editar</v-btn>
                    </td>
                    <td>
                        <v-btn color="red accent-3" >Eliminar</v-btn>
                    </td>
                    
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <Footer />
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    components: {
        Navbar: () => import('../components/Navbar.vue'),
        Footer: () => import('../components/Footer.vue'),
    },
    created() {
        this.$store.dispatch('students/getStudents')
    },

    computed: {
        ...mapState('students', ['students'])
    }
}
</script>

<style>

</style>