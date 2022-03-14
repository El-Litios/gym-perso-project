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

          <v-form @submit.prevent="saveChange()" lazy-validation ref="form" v-model="valid">

            <v-card-text>
            
              <!-- Height -->
              <v-text-field
                label="Estatura (mts) ej: 1.80"
                :rules="heightRules"
                hide-details="auto"
                v-model="changes.height"
                type="number"
                step=".1"
              ></v-text-field>


              <!-- Weight -->
              <v-text-field
                label="Peso (Kg) ej: 90.5"
                :rules="weigthRules"
                hide-details="auto"
                v-model="changes.weight"
                type="number"
                step=".1"
              ></v-text-field>

             
              <!-- Biceps -->
              <v-text-field
                label="Pliege biceps (mm) ej: 3.5"
                :rules="bicepsRules"
                hide-details="auto"
                v-model="biceps"
                type="number"
                step=".1"
              ></v-text-field>

              <!-- Triceps -->
              <v-text-field
                label="Pliege triceps (mm) ej: 7.8"
                :rules="tricepsRules"
                hide-details="auto"
                v-model="triceps"
                type="number"
                step=".1"
              ></v-text-field>

              <!-- Suprailiac -->
              <v-text-field
                label="Pliege suprailiaco (mm) ej: 9"
                :rules="suprailiacRules"
                hide-details="auto"
                v-model="suprailiac"
                type="number"
                step=".1"
              ></v-text-field>

              <!-- Subscapular -->
              <v-text-field
                label="Pliege subescapular (mm) ej: 8"
                :rules="suprailiacRules"
                hide-details="auto"
                v-model="subscapular"
                type="number"
                step=".1"
              ></v-text-field>

              <div v-if="gender === 'Femenino'">
                <!-- Hip -->
                <v-text-field
                  label="Caderas (mm) ej: 5"
                  :rules="hipRules"
                  hide-details="auto"
                  v-model="changes.hip"
                  type="number"
                  step=".1"
                ></v-text-field>

                <!-- Waist -->
                <v-text-field
                  label="Cintura (mm) ej: 5"
                  :rules="waistRules"
                  hide-details="auto"
                  v-model="changes.waist"
                  type="number"
                  step=".1"
                ></v-text-field>
              </div>
              
              <!-- Change Date -->
              <v-text-field
                label="Fecha de avance"
                :rules="cdRules"
                hide-details="auto"
                v-model="changes.changedate"
                type="text"
                onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'"
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
import { mapActions } from 'vuex'
import getDurninConstants from '../helpers/getDurninConstants'

export default {
  props: {
    age: {
      type: Number,
      required: true
    },
    gender: {
      required: true
    },
    idStudent: {
      type: String,
      required: true
    }
  },
  data () {
    return {
          details: {},
          dialog: false,    
          valid: true,
          changes: {},
          biceps: null,
          triceps: null,
          suprailiac: null,
          subscapular: null,

          //RULES
          heightRules: [
            value => !!value || 'Debe ingresar la altura.',
          ],
          weigthRules: [
            value => !!value || 'Debe ingresar el peso.',
          ],
          cdRules: [
            value => !!value || 'Debe ingresar la fecha.',
          ],
          bicepsRules: [
            value => !!value || 'Debe ingresar el pliege de biceps.',
          ],
          tricepsRules: [
            value => !!value || 'Debe ingresar el pliege de triceps.',
          ],
          subscapularRules: [
            value => !!value || 'Debe ingresar el pliege del subescapular.',
          ],
          suprailiacRules: [
            value => !!value || 'Debe ingresar el pliege del suprailiaco.',
          ],
          hipRules: [
            value => !!value || 'Debe ingresar el pliege de las caderas.',
          ],
          waistRules: [
            value => !!value || 'Debe ingresar el pliege de la cintura.',
          ],
    }
  },

  methods: {
    ...mapActions('students', ['createNewChange']),

    validate () {
      this.$refs.form.validate()
    },

    saveChange(){
      const imc = this.changes.weight / (this.changes.height * this.changes.height)
      const C = this.setDurninConstants.constantC
      const M = this.setDurninConstants.constantM
      const sum = parseFloat(this.biceps) + parseFloat(this.triceps) + parseFloat(this.subscapular) + parseFloat(this.suprailiac)
      const corporalDensity = C - (M * Math.log10(sum))
      const averageFat = (495 / corporalDensity) - 450
      const averageMass = ((Math.round(averageFat) / 100 ) * this.changes.weight) 

      this.changes.imc = Number(imc.toFixed(2));
      this.changes.averagefat = Math.round(averageFat)
      this.changes.averagemass = this.changes.weight - averageMass
      this.changes.idStudent = this.idStudent
      
      
      this.createNewChange(this.changes)
    }

  },
  computed: {
    setDurninConstants(){
      const constants =  getDurninConstants(this.gender, this.age)
      
      return constants
    }
  }
}
</script>

<style>

</style>