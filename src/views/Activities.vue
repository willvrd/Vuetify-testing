<template>
  <v-container grid-list-md>
    <v-layout row wrap>

      <v-flex md6>

        <v-card class="mb-3" v-for="(item, index) in listActivities" :key="index">
          <v-card-text>
            <v-chip
              class="ma-2 ml-0"
              color="pink"
              label
              text-color="white"
            >
              <v-icon left>label</v-icon>
              {{item.title}}
            </v-chip>
            <p>{{item.description}}</p>
            <v-btn color="warning" @click="editGetActivity(index)">Editar</v-btn>
            <v-btn color="error" class="ml-2" @click="deleteActivity(item.id)">Eliminar</v-btn>
          </v-card-text>
        </v-card>

      </v-flex>

      <v-flex md6>
        <v-card class="mb-3 pa-3">
    
          <v-form v-if="formAdd" @submit.prevent="addActivity">
            <v-text-field label="Titulo de la actividad" v-model="title"></v-text-field>
            <v-textarea label="Descripcion de la actividad" v-model="description"></v-textarea>
            <v-btn block color="success" type="submit">Agregar actividad</v-btn>
          </v-form>

          <v-form v-if="!formAdd" @submit.prevent="editActivity">
            <v-text-field label="Titulo de la actividad" v-model="title"></v-text-field>
            <v-textarea label="Descripcion de la actividad" v-model="description"></v-textarea>
            <v-btn block color="warning" type="submit">Editar actividad</v-btn>
          </v-form>

        </v-card>
      </v-flex>
      

    </v-layout>

    <v-snackbar
      v-model="snackbar"
    >
      {{ mensaje}}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Cerrar
      </v-btn>
    </v-snackbar>


  </v-container>


</template>

<script>
export default {
  data(){
    return{
      listActivities:[
        {id:1,title:'Titulo 1',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis erat egestas tortor consequat, in dapibus dolor aliquet. Ut molestie, quam nec suscipit rutrum, est magna porta nunc'},
        {id:2,title:'Titulo 2',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis erat egestas tortor consequat, in dapibus dolor aliquet. Ut molestie, quam nec suscipit rutrum, est magna porta nunc'},
        {id:3,title:'Titulo 3',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis erat egestas tortor consequat, in dapibus dolor aliquet. Ut molestie, quam nec suscipit rutrum, est magna porta nunc'}
      ],
      title:'',
      description:'',
      snackbar: false,
      mensaje:'',
      formAdd: true,
      indexActivity: ''
    }
  },
  methods: {

    addActivity(){

      //console.log(this.title,this.description);
      if(this.title === "" || this.description === ""){
        this.snackbar = true;
        this.mensaje = "Debes llenar todos los campos";
      }else{

        this.listActivities.push({
            id: Date.now(),
            title: this.title,
            description: this.description
        })

        this.title = "";
        this.description = "";

        this.snackbar = true;
        this.mensaje = "Actividad Agregada";

      }
        
    },

    deleteActivity(id){
      this.listActivities = this.listActivities.filter(e => e.id != id)
    },

    editGetActivity(index){

      this.formAdd = false;

      this.title = this.listActivities[index].title;
      this.description = this.listActivities[index].description;

      this.indexActivity = index;

    },

    editActivity(){

     
      if(this.title === "" || this.description === ""){
        this.snackbar = true;
        this.mensaje = "Debes llenar todos los campos";
      }else{

        this.listActivities[this.indexActivity].title = this.title; 
        this.listActivities[this.indexActivity].description = this.description; 
       
        this.title = "";
        this.description = "";

        this.snackbar = true;
        this.mensaje = "Actividad Editada";

        this.formAdd = true;

      }
        
    },



  }
}
</script>