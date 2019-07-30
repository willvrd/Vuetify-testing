<template>
  <v-app>

    <Menu></Menu>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>

import Menu from './components/Menu.vue'

export default {
  name: 'App',
   components: {
    Menu
  }
};
</script>
