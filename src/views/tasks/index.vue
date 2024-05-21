<script setup lang="ts">

import {ref} from "vue";
import Subtask from "./components/Subtask.vue";
import Task from "./components/Task.vue";

const step = ref(0)

</script>

<template>
  <v-sheet rounded="md" style="min-height: calc(100vh - 100px)">
    <v-tabs
      v-model="step"
      density="comfortable"
      color="primary"
      selected-class="font-weight-bold text-secondary"
    >
      <v-tab :value="0">
        子任务
      </v-tab>
      <v-tab :value="1">任务</v-tab>
    </v-tabs>

    <v-tabs-window
      class="mt-2"
      v-model="step"
    >
      <v-window-item :value="0" :key="0">
        <Subtask></Subtask>
      </v-window-item>

      <v-window-item :value="1" :key="1">
        <Task></Task>
      </v-window-item>
    </v-tabs-window>
  </v-sheet>
</template>

<style scoped>

</style>
