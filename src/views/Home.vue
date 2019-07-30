<template>
  
  <v-container grid-list-md>

    <v-layout row wrap>

      <v-flex xs12 sm4> 
        <v-card>

          <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          
            <v-card-title class="align-end fill-height"> 
              Testing the guayaba
            </v-card-title>
          
          </v-img>

          <v-card-text>
            <span>Number 1</span><br>
            <span class="text--primary">
              <span>This is a span</span><br>
              <span>Other span juju jeje</span>
            </span>
          </v-card-text>

          <v-card-actions>
            <v-btn
              text
              color="red"
              @click="asignarDialog(true)"
            >
              Modal
            </v-btn>
            <v-btn
              text
              color="red"
            >
              Explore
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>

      <v-flex xs12 sm4>  
        <v-card>
          <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          
            <v-card-title class="align-end fill-height"> 
              Testing the guayaba
            </v-card-title>
          
          </v-img>

          <v-card-text>
            <span>Number 1</span><br>
            <span class="text--primary">
              <span>This is a span</span><br>
              <span>Other span juju jeje</span>
            </span>
          </v-card-text>

          <v-card-actions>
            <v-btn
              text
              color="red"
            >
              Share
            </v-btn>
            <v-btn
              text
              color="red"
            >
              Explore
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
     
    </v-layout>

    <Dialog></Dialog>

  </v-container>


</template>

<script>

import {mapState,mapMutations} from 'vuex';
import Dialog from '@/components/Dialog.vue'

export default {
  components: {
     Dialog
  },
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
 
};
</script>
