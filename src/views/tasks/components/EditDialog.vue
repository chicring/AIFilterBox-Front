<script setup lang="ts">

import {ref} from "vue";
import Subtask from "../types/Subtask";
import { reactive } from 'vue';
import fields from "../types/fields";
import AddFieldDialog from "./AddFieldDialog.vue";
import {successToast} from "../../../util/ToastMessage";
import { updateSubtask} from "../../../api/methods/subtask";

const props = defineProps<{
  subtask: Subtask
}>()

const dialog = ref(false)
const subtask = ref<Subtask>(props.subtask)

let requestHeader = reactive(subtask.value.requestHeader ? JSON.parse(subtask.value.requestHeader) : {});
let pattern = reactive(subtask.value.pattern ? JSON.parse(subtask.value.pattern) : {});


function addRequestHeader({key, value}) {
  requestHeader[key] = value;
}

function addPattern({key, value}) {
  pattern[key] = value;
  successToast('添加成功'+key)
}

function deleteRequestHeader(key: any) {
  delete requestHeader[key];
}

function deletePattern(key: any) {
  delete pattern[key];
}

function save() {
  subtask.value.requestHeader = JSON.stringify(requestHeader);
  subtask.value.pattern = JSON.stringify(pattern);
  updateSubtask(subtask.value).then(() => {
    successToast('保存成功')
    dialog.value = false
  });
}
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
        <div v-for="(field, index) in fields">
          <v-text-field
            v-if="field.model !== 'prompt' && field.model !== 'pushType' && field.model !== 'action' && field.model !== 'type'"
            :key="index"
            v-model="subtask[field.model]"
            :label="field.label"
            color="primary"
            bg-color="containerBg"
            variant="outlined"
            counter
            :rounded="field.rounded"
          ></v-text-field>

          <v-textarea
            v-else-if="field.model === 'prompt'"
            v-model="subtask[field.model]"
            :label="field.label"
            color="primary"
            bg-color="containerBg"
            variant="outlined"
            counter
            auto-grow
            :rounded="field.rounded"
          >
          </v-textarea>
        </div>


        <div>
          <div class="d-flex justify-space-between">
            <span class="font-weight-bold">请求头</span>
            <AddFieldDialog type="header" @add="addRequestHeader"></AddFieldDialog>
          </div>

          <v-divider></v-divider>
          <div class="ma-3">

            <v-row dense>
              <template v-for="(value, key, index) in requestHeader" :key="index">
                <v-hover v-slot="{ isHovering, props }">
                  <v-col cols="2">
                    <v-btn rounded="md" height="56" color="primary" variant="tonal">{{key}}</v-btn>
                  </v-col>

                  <v-col cols="12" md="10" >
                    <v-text-field
                      v-model="requestHeader[key]"
                      color="primary"
                      bg-color="containerBg"
                      variant="outlined"
                      v-bind="props"
                    >
                      <template #append v-if="isHovering">
                        <v-btn icon color="error" size="x-small" variant="tonal" @click.stop="deleteRequestHeader(key)">
                          <XIcon></XIcon>
                        </v-btn>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-hover>
              </template>
            </v-row>
          </div>

          <div>
            <div class="d-flex justify-space-between">
              <div>
                <span class="font-weight-bold">提取规则</span>
                <p class="text-subtitle-1 mt-1">必须指定root,默认为: $</p>
              </div>

              <AddFieldDialog type="pattern" @add="addPattern"></AddFieldDialog>
            </div>
            <v-divider></v-divider>
            <div class="ma-3">
              <v-row dense>
                <template v-for="(value, key, index) in pattern" :key="index">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-col cols="2">
                      <v-btn rounded="md" height="56" color="primary" variant="tonal">{{key}}</v-btn>
                    </v-col>

                    <v-col cols="12" md="10">
                      <v-text-field
                        v-model="pattern[key]"
                        color="primary"
                        bg-color="containerBg"
                        variant="outlined"
                        v-bind="props"
                      >
                        <template #append v-if="isHovering">
                          <v-btn icon color="error" size="x-small" variant="tonal" @click.stop="deletePattern(key)">
                            <XIcon></XIcon>
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-hover>
                </template>
              </v-row>

            </div>
          </div>

        </div>

      </v-card-text>

      <v-card-actions>
        <v-btn color="error" @click="dialog = false">取消</v-btn>

        <v-btn rounded="md" color="primary" variant="flat" @click="save">保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
