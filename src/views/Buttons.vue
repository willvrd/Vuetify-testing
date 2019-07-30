<template>
  

    <v-container>
      <v-layout wrap>
         <v-flex> 

           <v-btn>Texto</v-btn>
           <v-btn color="primary">Texto</v-btn>
           <v-btn color="blue" dark>Texto</v-btn>

           <v-btn text>Sin fondo</v-btn>

           <v-btn color="warning" large>Largo</v-btn>
           <v-btn color="warning" small>small</v-btn>

           <v-btn small disabled>Disabled</v-btn>
           <v-btn small :disabled="false">Enabled</v-btn>

           <v-btn color="info" depressed>Depressed</v-btn>

           <v-btn><v-icon>favorite</v-icon></v-btn>

            <v-btn text icon color="pink">
              <v-icon>favorite</v-icon>
            </v-btn>

            <v-btn color="pink" fab>
              <v-icon>favorite</v-icon>
            </v-btn>

            <v-btn color="warning" dark>Normal Button</v-btn>

           

         </v-flex>
      </v-layout>
    </v-container>

    
 
</template>
