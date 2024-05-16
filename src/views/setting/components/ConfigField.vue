<script setup lang="ts">

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: false
  }
})

</script>

<template>
  <V-col cols="12" md="3">
    <v-text-field
      :label="label"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      variant="outlined"
      color="primary"
      bg-color="containerBg"
      dense
    ></v-text-field>
  </V-col>
</template>

<style scoped>

</style>
