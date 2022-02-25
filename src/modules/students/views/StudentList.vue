<template>
  <div>
        <Navbar />
        
        <h1>Lista</h1>

        <Footer />
  </div>
</template>

<script>
export default {
    components: {
        Navbar: () => import('../components/Navbar.vue'),
        Footer: () => import('../components/Footer.vue'),
    },
    created() {
        this.$store.dispatch('students/getStudents')
    }
}
</script>

<style>

</style>