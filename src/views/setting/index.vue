<script setup lang="ts">

import { ref} from "vue";
import SystemSetting from "./components/SystemSetting.vue";
import ModelSetting from "./components/ModelSetting.vue";

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
        <Settings2Icon class="mr-2"></Settings2Icon>
        系统设置
      </v-tab>
      <v-tab :value="1">
        <SettingsIcon class="mr-2"></SettingsIcon>
        模型设置
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-tabs-window
      class="mt-2"
      v-model="step"
    >
      <v-window-item :value="0" :key="0" class="pa-4">
        <SystemSetting></SystemSetting>
      </v-window-item>

      <v-window-item :value="1" :key="1" class="pa-4">
        <ModelSetting></ModelSetting>
      </v-window-item>
    </v-tabs-window>
  </v-sheet>

</template>

<style scoped>

</style>
