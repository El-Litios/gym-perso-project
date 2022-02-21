<template>
  <div>
    <Navbar/>
    <br>
    <v-container>
      <v-row>
        <v-col cols="12"  align="center" justify="center">
          <v-img src="../assets/evolutiongym.jpg" max-width="400" max-height="400">
          </v-img>
        </v-col>
        <v-col cols="12" align="center" justify="center">
          <v-btn elevation="7" x-large block :to="{name: 'Log-in'}">Ingresar</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'Home',

    components: {
      Navbar, Footer
    },
  }
</script>
