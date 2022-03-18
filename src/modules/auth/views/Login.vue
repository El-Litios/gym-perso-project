<template>
  <div>
      <Navbar />
      <br>
        <v-container>
        <v-row>
            <v-col cols="12"  align="center" justify="center">
                <v-text-field
                    label="Ingrese su correo"
                    :rules="emailRules"
                    hide-details="auto"
                    v-model="user.email"
                ></v-text-field>
            </v-col>
            <v-col cols="12"  align="center" justify="center">
                <v-text-field
                    type="password"
                    label="Ingrese su contraseña"
                    v-model="user.pass"
                    :rules="passRules"
                ></v-text-field>
            </v-col>
            <v-col cols="12" align="center" justify="center">
                <v-btn elevation="7" x-large block @click="loginUser(user)">Ingresar</v-btn>
            </v-col>
        </v-row>
        </v-container>
        <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    components: {
        Navbar: () => import('../../../components/Navbar.vue'),
        Footer: () => import('../../../components/Footer.vue'),
    },

    data(){
        return {
            emailRules: [
                value => !!value || 'Debe ingresar su correo.',
                value => /.+@.+/.test(value) || 'De ser un email válido',
            ],
            passRules: [
                value => !!value || 'Es requerido.',
                value => (value || '').length >= 6 || 'Minimo 6 caracteres'
            ],

            user: {}
        }
    },

    methods: {
        ...mapActions('auth', ['loginUser'])
    }
}
</script>

<style>

</style>