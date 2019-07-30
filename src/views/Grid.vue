<template>
  
  <v-container>

    <v-layout wrap>
      <v-flex class="primary" xs12> 12 </v-flex>
      <v-flex class="secondary white--text" xs6> 6 </v-flex>
      <v-flex class="error" xs6> 6 </v-flex>
    </v-layout>

    <v-layout wrap justify-center align-center class="mt-5 secondary" style="height:300px;">
      <v-flex class="lime accent-2" xs3> 3 - Centrado </v-flex>
      <v-flex class="success" xs3> 3 - Centrado </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex xs12> 
        <h1 class="display-1 text-uppercase">Lorem ipsum dolor sit amet, </h1> 
        <h1 class="display-2 primary pa-5 mt-5">Lorem ipsum dolor sit amet,  </h1> 
        <h1 class="display-3 text-center">Lorem ipsum dolor sit amet,  </h1>
        <h1 class="display-4">Lorem ipsum dolor sit amet,  </h1>
      </v-flex>
      
    </v-layout>

  </v-container>


</template>

<script>


export default {
  components: {
    
  },
};
</script>
