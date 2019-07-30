<template>
    <div class="main-menu">
    
        <v-app-bar app class="success white--text">

        <v-app-bar-nav-icon class="white--text" @click="drawer=!drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="headline text-uppercase">
            <span>Vuetify</span>
            <span class="font-weight-light ml-2">MATERIAL DESIGN</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn text class="white--text" to="/">Home</v-btn>
            <v-btn text class="white--text" to="/grid">Grid</v-btn>
            <v-btn text class="white--text" to="/buttons">Buttons</v-btn>
        </v-toolbar-items>
        
        </v-app-bar>

        
        <v-navigation-drawer
            v-model="drawer"
            temporary
            app
            dark
            class="white--text"
            >

            <v-list-item>
              <v-list-item-content>

                <v-list-item-title class="title">
                  Menu Vertical
                </v-list-item-title>

                <v-list-item-subtitle>
                  subtext
                </v-list-item-subtitle>

              </v-list-item-content>
            </v-list-item>

        </v-navigation-drawer>

    </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      drawer: false
    }
  },
}
</script>