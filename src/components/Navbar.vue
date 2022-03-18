<template>
  <v-toolbar>
      <v-toolbar-title>
          Gestion de Alumnos
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="userExists"
        color="primary"
        text
        @click="logoutUser"
      >
        Cerrar Sesión
      </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['logoutUser']),
  },

  computed: {
    ...mapGetters('auth', ['userExists'])
  }
}
</script>