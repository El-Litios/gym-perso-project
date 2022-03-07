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

          <v-form @submit.prevent="" lazy-validation ref="form" v-model="valid">

            <v-card-text>
            
              <!-- Height -->
              <v-text-field
                label="Estatura"
                :rules="heightRules"
                hide-details="auto"
                v-model="details.height"
                type="number"
                step=".1"
              ></v-text-field>

              <v-spacer></v-spacer>

              <!-- Weight -->
              <v-text-field
                label="Peso"
                :rules="weigthRules"
                hide-details="auto"
                v-model="details.weight"
              ></v-text-field>

              <v-spacer></v-spacer>
              
              <!-- Birthdate -->
              <v-text-field
                label="Fecha de Hoy"
                :rules="dateRules"
                hide-details="auto"
                v-model="details.date"
                type="date"
              ></v-text-field>

            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                color="primary"
                text
                @click="validate"
                :disabled="!valid"
              >
                Agregar Cambios
              </v-btn>
            </v-card-actions>

          </v-form>

        </v-card>
      </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
          details: {},
          dialog: false,    
          valid: true,

          //RULES
          dateRules: [
            value => !!value || 'Debe ingresar la fecha.'
          ],
          heightRules: [
            value => !!value || 'Debe ingresar la altura.',
          ],
          weigthRules: [
            value => !!value || 'Debe ingresar el peso.',
          ],
    }
  },

  methods: {
    validate () {
      this.$refs.form.validate()
    },
  }
}
</script>

<style>

</style>