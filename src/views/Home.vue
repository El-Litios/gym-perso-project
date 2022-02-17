<template>
  <div>
    <Navbar/>
    <br>
    <v-container>
      <v-row>
        <v-col cols="12" md="12" xs="12" sm="12" lg="12" align="center" justify="center">
          <v-img src="../assets/evolutiongym.jpg" max-width="400" max-height="400">
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  export default {
    name: 'Home',

    components: {
      Navbar
    },
  }
</script>
