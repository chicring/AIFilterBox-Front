<script setup lang="ts">

import {ref} from "vue";
import Subtask from "../types/Subtask";

const props = defineProps<{
  subtask: Subtask
}>()

const dialog = ref(false)
const subtask = ref<Subtask>(props.subtask)

import { reactive } from 'vue';

const requestHeader= reactive(JSON.parse(subtask.value.requestHeader));

const pattern = reactive(JSON.parse(subtask.value.pattern));

</script>

<template>
  <v-btn
    @click.stop="dialog = true"
    variant="text"
  >

    <template #prepend>
      <EditIcon></EditIcon>
    </template>

    <strong class="align-center">编辑</strong>

  </v-btn>

  <v-dialog
    v-model="dialog"
    max-width="900"
  >
    <v-card rounded="md">
      <template #title>
        <div class="d-flex justify-space-between">
          <span>编辑任务</span>
          <v-btn icon variant="text" @click="dialog = false">
            <XIcon></XIcon>
          </v-btn>
        </div>
      </template>

      <v-divider></v-divider>

      <v-card-text>
        <v-text-field
          v-model="subtask.name"
          label="任务名称"
          color="primary"
          bg-color="containerBg"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="subtask.cronExpression"
          label="定时规则"
          color="primary"
          bg-color="containerBg"
          variant="outlined"
          counter
          rounded="md"
        ></v-text-field>

        <v-text-field
          v-model="subtask.url"
          label="请求地址"
          color="primary"
          bg-color="containerBg"
          variant="outlined"
          counter
          rounded="md">
        </v-text-field>

        <div>
          <div class="d-flex justify-space-between">
            <span>请求头</span>

            <v-btn variant="text" icon>
              <PlusIcon></PlusIcon>
            </v-btn>
          </div>
          <v-divider></v-divider>
          <div class="ma-3">

            <v-row>
              <template v-for="(value, key) in requestHeader">
                <v-col cols="2">
                  <v-btn rounded="md" height="56" color="primary" variant="tonal">
                    {{key}}
                  </v-btn>
                </v-col>
                <v-col cols="10">
                  <v-text-field
                    v-model="requestHeader[key]"
                    color="primary"
                    bg-color="containerBg"
                    variant="outlined"
                  >
                  </v-text-field>
                </v-col>
              </template>
            </v-row>
          </div>

          <div>
            <div class="d-flex justify-space-between">
              <span>提取规则</span>
              <v-btn variant="text" icon>
                <PlusIcon></PlusIcon>
              </v-btn>
            </div>
            <v-divider></v-divider>
            <div class="ma-3">
              <v-row dense>
                <template v-for="(value, key) in pattern">
                  <v-col cols="2">
                    <v-btn rounded="md" height="56" color="primary" variant="tonal">
                      {{key}}
                    </v-btn>
                  </v-col>

                  <v-col cols="10">
                    <v-text-field
                      v-model="pattern[key]"
                      color="primary"
                      bg-color="containerBg"
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                </template>
              </v-row>

            </div>
          </div>

        </div>

        <v-text-field
          v-model="subtask.prefix"
          label="消息id前缀"
          color="primary"
          bg-color="containerBg"
          variant="outlined"
          counter
          rounded="md"
        >
        </v-text-field>

        <v-text-field
          v-model="subtask.domain"
          label="发布地址域名，url需要拼接时使用"
          color="primary"
          bg-color="containerBg"
          variant="outlined"
          counter
          rounded="md"
        >
        </v-text-field>


      </v-card-text>

      <v-card-actions>
        <v-btn
          color="error"
          @click="dialog = false"
        >
          取消
        </v-btn>
        <v-btn
          rounded="md"
          color="primary"
          variant="flat"
        >
          确定
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
