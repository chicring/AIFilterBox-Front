<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Messages from './components/Messages.vue';
import { findAll } from '../../api/methods/message';
import Message from './types/message';

type PageResp = {
  pageSize: number
  totalCount: number
  currentPage: number
  totalPages: number
  list: Message[],
}

const query = ref({
    page: 1,
    size: 12,
    used: null,
});

const messages = ref({} as PageResp);

function findMessages() {
    findAll(query.value).then((res) => {
        messages.value = res;
    });
}
const selectedTab = ref(0);

onMounted(() => {
    findMessages();
});
</script>

<template>

    <v-sheet rounded="md" style="min-height: calc(100vh - 100px)">
        <v-tabs
          v-model="selectedTab"
            density="comfortable"
            mandatory
            color="secondary"
            selected-class="font-weight-bold rounded-xl"
        >
            <v-tab @click.stop="query.used = null; findMessages() ">全部</v-tab>

            <v-tab @click.stop="query.used = true; findMessages() ">已发送</v-tab>

            <v-tab @click.stop="query.used = false; findMessages() ">未发送</v-tab>

        </v-tabs>

        <v-divider></v-divider>
        <div class="pa-4">
          <v-row>
            <template v-for="(message, index) in messages.list" :key="message.id">
              <v-col cols="12" md="4">
                <Messages :message="message"></Messages>
              </v-col>
            </template>
          </v-row>
        </div>
        <v-pagination
          v-model="query.page"
          :length="messages.totalPages"
          :total-visible="4"
          @update:modelValue="findMessages"
        ></v-pagination>
    </v-sheet>
</template>

<style scoped>

</style>
