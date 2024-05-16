<script setup lang="ts">

import ProfileDD from "./ProfileDD.vue";
</script>

<template>
  <v-app-bar height="60" elevation="0">

    <v-tabs
      class="ml-5"
    >
        <v-tab>任务</v-tab>
        <v-tab>消息</v-tab>
        <v-tab>设置</v-tab>
    </v-tabs>


    <v-spacer></v-spacer>
    <ProfileDD></ProfileDD>
  </v-app-bar>
</template>

<style scoped>

</style>
