<template>
  <div>
        <Navbar/>
        <h1>Detalles</h1>
        <Modal/>
        <div v-if="details">
            <div v-for="item in details" :key="item.id">
                ID: {{item.id}} - GRASA: {{item.grasa}} - FECHA: {{item.date}}
            </div>
        </div>
        <div v-else>
            <h1>No hay nada</h1>
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
        ...mapActions('students', ['getDetails'])
    },

    computed: {
        ...mapState('students', ['details'])
    },

    created() {
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