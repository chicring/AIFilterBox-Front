<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import {findAll, saveBatch} from "../../../api/methods/option";
import ConfigField from "./ConfigField.vue";
import {successToast} from "../../../util/ToastMessage";

const modelConfigKeys = [
  { key: 'openaiApiKey', label: 'API Key' },
  { key: 'openaiHost', label: '渠道地址' },
  { key: 'openaiModel', label: '默认使用模型, 例如：gpt-4' },
  { key: 'openaiEnableProxy', label: '是否启用http代理' }
];

const modelConfigValues = reactive({
  openaiApiKey: '',
  openaiHost: '',
  openaiModel: '',
  openaiEnableProxy: ''
});

const GeminiConfigKeys = [
  { key: 'geminiApiKey', label: 'API Key' },
  { key: 'geminiHost', label: '渠道地址' },
  { key: 'geminiModel', label: '默认使用模型, 例如：gemini-pro' },
  { key: 'geminiEnableProxy', label: '是否启用http代理' }
];

const GeminiConfigValues = reactive({
  geminiApiKey: '',
  geminiHost: '',
  geminiModel: '',
  geminiEnableProxy: ''
});

const ChannelConfig = reactive({
  aiChannel: ''
})


const options = ref<any>([])

function loadItems() {
  findAll().then((res) => {
    options.value = res

    ChannelConfig.aiChannel = res.find(option => option.key === 'aiChannel').value

    modelConfigKeys.forEach(item => {
      const option = res.find(option => option.key === item.key);
      if (option !== undefined) {
        modelConfigValues[item.key] = option.value
      }
    })

    GeminiConfigKeys.forEach(item => {
      const option = res.find(option => option.key === item.key);
      if (option !== undefined) {
        GeminiConfigValues[item.key] = option.value
      }
    })
  })
}

function saveOrUpdate(data : any) {
  let updatedOptions = [];

  for (let key in data) {
    let option = options.value.find((option: any) => option.key === key);

    if (option && option.value !== data[key]) {
      option.value = data[key];
      updatedOptions.push(option);
    }
  }

  if (updatedOptions.length > 0) {
    saveBatch(updatedOptions).then(() => {
      loadItems();
      successToast('设置成功')
    })
  }
}

onMounted(() => {
  loadItems()
})
</script>

<template>
  <v-card border="borderLight opacity-50 sm" elevation="0">
    <v-card-title><span class="text-body-1 font-weight-black">首选渠道</span></v-card-title>
    <v-card-subtitle>支持 OpenAI 格式的渠道和 Gemini</v-card-subtitle>
    <v-card-text>
      <v-row dense>
        <V-col cols="12" md="5">
          <v-select
            label="渠道选择"
            variant="outlined"
            color="primary"
            bg-color="containerBg"
            dense
            :items="[ 'openai', 'gemini' ]"
            v-model="ChannelConfig.aiChannel"
          >
          </v-select>
        </V-col>

      </v-row>
      <v-btn color="primary" variant="flat" rounded="md" @click="saveOrUpdate(ChannelConfig)">保存配置</v-btn>
    </v-card-text>
  </v-card>

  <v-card border="borderLight opacity-50 sm" elevation="0" class="mt-4">
    <v-card-title><span class="text-body-1 font-weight-black">OpenAi设置</span></v-card-title>
    <v-card-subtitle>OpenAI配置</v-card-subtitle>

    <v-card-text>
      <v-row>
        <ConfigField
          v-for="(item, index) in modelConfigKeys"
          :key="index"
          :label="item.label"
          v-model="modelConfigValues[item.key]"
        />
      </v-row>
      <v-btn color="primary" variant="flat" rounded="md" @click="saveOrUpdate(modelConfigValues)">保存OpenAI配置</v-btn>
    </v-card-text>
  </v-card>

  <v-card border="borderLight opacity-50 sm" elevation="0" class="mt-4">
    <v-card-title><span class="text-body-1 font-weight-black">Gemini配置</span></v-card-title>
    <v-card-subtitle>Gemini配置</v-card-subtitle>

    <v-card-text>
      <v-row>
        <ConfigField
          v-for="(item, index) in GeminiConfigKeys"
          :key="index"
          :label="item.label"
          v-model="GeminiConfigValues[item.key]"
        />
      </v-row>
      <v-btn color="primary" variant="flat" rounded="md" @click="saveOrUpdate(GeminiConfigValues)">保存Gemini配置</v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
