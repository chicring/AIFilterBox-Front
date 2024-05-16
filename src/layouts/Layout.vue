<script setup lang="ts">

import Header from "./vertical-header/Header.vue";
</script>

<template>
  <v-app>

    <Header></Header>

    <v-main>
      <v-container class="page-wrapper" fluid>
        <RouterView></RouterView>
      </v-container>
    </v-main>

  </v-app>
</template>

<style scoped>

</style>
