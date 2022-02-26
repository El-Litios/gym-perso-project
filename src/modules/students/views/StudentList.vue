<template>
  <div>
        <Navbar />
        
        <h1>Lista</h1>

        <h1 v-for="item in students" :key="item.id">{{item.name}}</h1>

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