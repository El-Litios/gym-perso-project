<template>
    <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="400"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green lighten-3"
              x-small
              v-bind="attrs"
              v-on="on"
            >
              Agregar Faulker
            </v-btn>
          </template>
  
          <v-card>
            <v-card-title class="text-h5 white lighten-2">
              Formulario Faulker
            </v-card-title>
  
            <v-form @submit.prevent="saveFaulkerChange()" lazy-validation ref="form" v-model="valid">
  
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
  
               
                <!-- Abdomen -->
                <v-text-field
                  label="Pliege Abdomen (mm) ej: 3.5"
                  :rules="AbdomenRules"
                  hide-details="auto"
                  v-model="abdominal"
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
  import getFaulkerConstants from '../helpers/getFaulkerConstants'
  
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
            abdominal: null,
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
            AbdomenRules: [
              value => !!value || 'Debe ingresar el pliege de abdomen.',
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
      ...mapActions('students', ['createNewFaulkerChange']),
  
      validate () {
        this.$refs.form.validate()
      },
  
      saveFaulkerChange() {
    const imc = this.changes.weight / (this.changes.height * this.changes.height);
    const constants = this.setFaulkerConstants;
    const sum = parseFloat(this.abdominal) + parseFloat(this.triceps) + parseFloat(this.subescapular) + parseFloat(this.suprailiac);
    const amountFatFaulker = sum * constants.constant_1 + constants.constant_2;

    this.changes.imc = Number(imc.toFixed(2));
    this.changes.averagefat = Number(amountFatFaulker.toFixed(2));
    this.changes.averagemass = this.changes.weight - (this.changes.weight * amountFatFaulker / 100);
    this.changes.amountfat = (amountFatFaulker * this.changes.weight) / 100;
    this.changes.idStudent = this.idStudent;
    this.changes.category = 'Faulkner';

    this.createNewFaulkerChange(this.changes);
}

  
    },
    computed: {
      setFaulkerConstants(){
        const constants =  getFaulkerConstants(this.gender, this.age)
        
        return constants
      }
    }
  }
  </script>