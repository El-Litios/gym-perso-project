<template>
    <div class="text-center">
        <v-dialog
        v-model="dialog"
        width="500"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="blue lighten-2"
            x-small
            v-bind="attrs"
            v-on="on"
          >
            Ver tabla
          </v-btn>
        </template>

        <v-card v-if="gender === 'Masculino'">
            <v-card-title class="text-h5 grey lighten-2">
            % DE GRASA EN HOMBRES
            </v-card-title>
                <v-img src="../../../assets/TableFatMen.png"></v-img>
            <v-card-text>
                
            </v-card-text>
        </v-card>
        <v-card v-else>
            <v-card-title class="text-h5 grey lighten-2">
            % DE GRASA EN MUJERES
            </v-card-title>

            <v-card-text>
                <v-img src="../../../assets/TableFatWoman.png"></v-img>
            </v-card-text>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        gender: {
            type: String,
        }
    },
    data () {
        return {
            dialog: false,
        }
    },
}
</script>

<style>

</style>