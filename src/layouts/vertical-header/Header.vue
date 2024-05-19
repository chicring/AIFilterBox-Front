<script setup lang="ts">

import ProfileDD from "./ProfileDD.vue";
</script>

<template>
  <v-app-bar height="60" elevation="0">

    <v-tabs
      class="ml-5"
      hide-slider
      selected-class="font-weight-bold rounded-xl"
    >
        <v-tab to="/task">主页</v-tab>
        <v-tab to="/message">消息</v-tab>
        <v-tab to="/setting">设置</v-tab>
    </v-tabs>


    <v-spacer></v-spacer>
    <ProfileDD></ProfileDD>
  </v-app-bar>
</template>

<style scoped>

</style>
