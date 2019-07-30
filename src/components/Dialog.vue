<template>
  
    <div class="testing-dialog">
    
      <v-dialog v-model="dialog" width = "500"> 
        <v-card>
          <v-card-title>Titulo</v-card-title>
          <v-card-text> 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nam, voluptas ullam, corrupti repellat esse itaque vero libero qui nulla perferendis at dolores nostrum! Ipsa impedit libero aperiam quis sapiente?
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn @click="asignarDialog(false)">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>

</template>

<script>

import {mapState,mapMutations} from 'vuex';

export default {
  name: 'Dialog',
  computed: {
      ...mapState([
        'dialog'
      ]),
  },
  methods: {
      ...mapMutations([
          'asignarDialog'
      ])
  },
  
}
</script>