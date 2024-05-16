<script setup lang="ts">

import {ref} from "vue";
import Subtask from "./components/Subtask.vue";
import Task from "./components/Task.vue";

const step = ref(0)

</script>

<template>

  <v-tabs
    v-model="step"
    density="compact"
  >
    <v-tab :value="0">
      任务
    </v-tab>
    <v-tab :value="1">子任务</v-tab>
  </v-tabs>

  <v-tabs-window
    class="mt-2"
    v-model="step"
  >
    <v-window-item :value="0" :key="0">
      <Task></Task>
    </v-window-item>

    <v-window-item :value="1" :key="1">
      <Subtask></Subtask>
    </v-window-item>
  </v-tabs-window>
</template>

<style scoped>

</style>
