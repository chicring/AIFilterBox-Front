<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import {findAll, saveBatch} from "../../../api/methods/option";
import ConfigField from "./ConfigField.vue";
import {successToast} from "../../../util/ToastMessage";

const mailConfigKeys = [
  { key: 'mailHost', label: '邮箱地址' },
  { key: 'mailPort', label: '邮箱端口' },
  { key: 'mailUsername', label: '发件人账户' },
  { key: 'mailPassword', label: '发件人密钥' },
  { key: 'mailTo', label: '收件人地址' }
];
const proxyConfigKeys = [
  { key: 'proxyHost', label: '代理主机' },
  { key: 'proxyPort', label: '代理端口' },
];

const mailConfigValues = reactive({
  mailHost: '',
  mailPort: '587',
  mailUsername: '',
  mailPassword: '',
  mailTo: ''
});

const proxyConfigValues = reactive({
  proxyHost: '',
  proxyPort: '',
});

const options = ref<any>([])

function loadItems() {
  findAll().then((res) => {
    options.value = res

    mailConfigKeys.forEach(item => {
      const option = res.find(option => option.key === item.key);
      if (option !== undefined) {
        mailConfigValues[item.key] = option.value;
      }
    })

    proxyConfigKeys.forEach(item => {
      const option = res.find(option => option.key === item.key);
      if (option !== undefined) {
        proxyConfigValues[item.key] = option.value;
      }
    })
  })
}

//传入mailConfigValues 或 proxyConfigValues 然后遍历里面的对象是不是发送了变化再执行
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
    <v-card-title><span class="text-body-1 font-weight-black">配置邮箱</span></v-card-title>
    <v-card-subtitle>系统的邮件推送服务</v-card-subtitle>

    <v-divider></v-divider>
    <v-card-text>
      <v-row dense>
        <ConfigField
          v-for="(item, index) in mailConfigKeys"
          :key="index"
          :label="item.label"
          v-model="mailConfigValues[item.key]"
        />
      </v-row>

      <v-btn color="primary" variant="flat" rounded="md" @click="saveOrUpdate(mailConfigValues)">保存邮箱配置</v-btn>
    </v-card-text>
  </v-card>

  <v-card border="borderLight opacity-50 sm" elevation="0" class="mt-4">
    <v-card-title><span class="text-body-1 font-weight-black">代理配置</span></v-card-title>
    <v-card-subtitle>http代理配置</v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text>
      <v-row dense>
        <ConfigField
          v-for="(item, index) in proxyConfigKeys"
          :key="index"
          :label="item.label"
          v-model="proxyConfigValues[item.key]"
        />
      </v-row>

      <v-btn color="primary" variant="flat" rounded="md" @click="saveOrUpdate(proxyConfigValues)">保存代理配置</v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
