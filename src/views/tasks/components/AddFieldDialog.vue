<script setup lang="ts">

import {ref} from "vue";

const props = defineProps<{
  type: string
}>()


const dialog = ref(false)

const field = ref({
  key: '',
  value: '',
})
const emite = defineEmits(['add'])

function submit() {
  emite('add', field.value)
  dialog.value = false
}

</script>

<template>
  <v-btn
    @click.stop="dialog = true"
    variant="text"
    icon
  >

    <PlusIcon></PlusIcon>
  </v-btn>

  <v-dialog
    v-model="dialog"
    max-width="600"
  >
    <v-card>

      <v-card-title class="font-weight-bold text-body-1">添加 {{props.type}}</v-card-title>
      <v-card-text>
        <div v-if="props.type === 'pattern'">

          <v-alert
            icon="$info"
            color="primary"
            class="mb-5"
            rounded="md"
          >
            <p class="font-weight-bold text-body-1">必须指定root字段,默认为: $</p>
            <span class="text-body-1">
              使用jsonpath表达式匹配消息字段
              例如: messageId $.messageId
              <br> 具体规则请参考: <a href="https://github.com/json-path/JsonPath" target="_blank">JsonPath</a>
            </span>
          </v-alert>

          <v-select
            color="primary"
            bg-color="containerBg"
            v-model="field.key"
            :items="['root','messageId', 'title', 'description', 'picUrl', 'ownerName', 'ownerPicUrl', 'typeName', 'platformName', 'time', 'url']"
            label="消息字段名"
            variant="outlined"
          >
          </v-select>

          <v-text-field
            label="匹配规则"
            color="primary"
            bg-color="containerBg"
            variant="outlined"
            v-model="field.value"
          >
          </v-text-field>
        </div>

        <div v-else>
          <v-text-field
            label="请求头参数名"
            color="primary"
            bg-color="containerBg"
            variant="outlined"
            v-model="field.key"
          >
          </v-text-field>

          <v-text-field
            label="请求头参数值"
            color="primary"
            bg-color="containerBg"
            variant="outlined"
            v-model="field.value"
          >
          </v-text-field>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="dialog = false"
          color="error"
        >
          取消
        </v-btn>

        <v-btn
          @click="submit"
          color="primary"
        >
          确定
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<style scoped>

</style>
