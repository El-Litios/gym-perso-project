<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="400"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="green lighten-2"
            x-small
            v-bind="attrs"
            v-on="on"
          >
            Agregar
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 white lighten-2">
            Formulario
          </v-card-title>

          <form @submit.prevent="createStudent(student)">

            <v-card-text>
            
              <!-- Rut -->
              <v-text-field
                label="Rut"
                :rules="rutRules"
                hide-details="auto"
                v-model="student.rut"
              ></v-text-field>

              <v-spacer></v-spacer>

              <!-- Name -->
              <v-text-field
                label="Nombre"
                :rules="nameRules"
                hide-details="auto"
                v-model="student.name"
              ></v-text-field>

              <v-spacer></v-spacer>

              <!-- Father Lastname -->
              <v-text-field
                label="Apellido Paterno"
                :rules="flRules"
                hide-details="auto"
                v-model="student.flname"
              ></v-text-field>

              <v-spacer></v-spacer>

              <!-- Mother Lastname -->
              <v-text-field
                label="Apellido Materno"
                :rules="mlRules"
                hide-details="auto"
                v-model="student.mlname"
              ></v-text-field>

              <v-spacer></v-spacer>
              
              <!-- Phone -->
              <v-text-field
                label="Teléfono"
                :rules="phoneRules"
                hide-details="auto"
                v-model="student.phone"
              ></v-text-field>

            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                color="primary"
                text
                @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>

          </form>

        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data(){
      return {
          dialog: false,
          student: {},

          //RULES
          rutRules: [
            value => !!value || 'Debe ingresar el rut.',
          ],
          nameRules: [
            value => !!value || 'Debe ingresar el nombre.',
            value => (value || '').length <= 25 || 'Máximo 25 caracteres',
          ],
          flRules: [
            value => !!value || 'Debe ingresar el apellido paterno.',
            value => (value || '').length <= 25 || 'Máximo 25 caracteres',
          ],
          mlRules: [
            value => !!value || 'Debe ingresar el apellido materno.',
            value => (value || '').length <= 25 || 'Máximo 25 caracteres',
          ],
          phoneRules: [
            value => !!value || 'Debe ingresar el telefono.'
          ]
      }
  },

  methods: {
    ...mapActions('students', ['createStudent'])
  }
}
</script>