<template>
  <div>
      <Navbar />
      <br>
        <v-container>
        <v-row>
            <v-col cols="12"  align="center" justify="center">
                <v-text-field
                    label="Ingrese su correo"
                    :rules="rules"
                    hide-details="auto"
                ></v-text-field>
            </v-col>
            <v-col cols="12"  align="center" justify="center">
                <v-text-field
                    type="password"
                    label="Ingrese su contraseña"
                ></v-text-field>
            </v-col>
            <v-col cols="12" align="center" justify="center">
                <v-btn elevation="7" x-large block :to="{ name: 'StudentsList'  }">Ingresar</v-btn>
            </v-col>
        </v-row>
        </v-container>
        <Footer />
  </div>
</template>

<script>

export default {
    components: {
        Navbar: () => import('../components/Navbar.vue'),
        Footer: () => import('../components/Footer.vue'),
    },

    data(){
        return {
            rules: [
                value => !!value || 'Es requerido.',
                value => /.+@.+/.test(value) || 'De ser un email válido',
            ],
        }
    }
}
</script>

<style>

</style>