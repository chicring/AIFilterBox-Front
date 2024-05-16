<script setup lang="ts">
import headers from "../types/headers";
import {onMounted, ref} from "vue";
import {findSubtaskPage} from "@/api/methods/subtask";
import EditDialog from "./EditDialog.vue";
import EmtyPage from "../../error/EmtyPage.vue";
import {infoToast} from "../../../util/ToastMessage";
import {MailIcon} from "vue-tabler-icons";

type PageResp = {
  pageSize: number
  totalCount: number
  currentPage: number
  totalPages: number
  list: any[],
}

const subtasks = ref({} as PageResp)

const selectedItems = ref([]);

type Search = {
  page: number
  size: number
  search: string | null
}

const search = ref<Search>({
  page: 1,
  size: 20,
  search: null,
})

async function loadItems({ page, itemsPerPage }: { page: number, itemsPerPage: number }) {
  search.value.page = page
  search.value.size = itemsPerPage
  findSubtaskPage().then((res) => {
    subtasks.value = res
  })
}

function getPushIcon(pushType: string) {
  switch (pushType) {
    case 'mail':
      return MailIcon
    case 'sms':
      return 'SmsIcon'
    default:
      return 'EmailIcon'
  }
}

</script>

<template>
  <v-sheet rounded="md"  class="pa-4">

    <v-row >
      <v-col cols="12" md="3">
        <v-text-field
          v-model="search.search"
          density="compact"
          label="搜索"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          rounded="md"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="3">
        <div class="d-flex justify-end ga-2">
          <v-btn
            color="primary"
            rounded="md"
            flat
            v-if="selectedItems.length > 0"
          >
            批量删除
          </v-btn>

          <v-btn
            color="primary"
            rounded="md"
            flat
          >
            <PlusIcon></PlusIcon>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-data-table-server
      class="mt-4"
      sticky
      hover
      show-select
      v-model="selectedItems"
      :headers="headers"
      :items="subtasks.list ? subtasks.list : []"
      :items-length="subtasks.totalCount ? subtasks.totalCount : 0"
      v-model:items-per-page="search.size"
      :search="search.search"
      :items-per-page-options= "[5, 10, 15, 20]"
      items-per-page-text="每页:"
      @update:options="loadItems"
    >
      <template #item.nextTime="{ item }">
        <span>{{item.cronExpression}}</span>
      </template>

      <template #item.url="{value}">
      <span
        class="d-inline-block text-truncate"
        style="max-width: 150px;"
      >{{value}}
        <v-tooltip
          activator="parent"
          location="top"
          close-delay="200"
          class="font-weight-bold">
          {{value}}
        </v-tooltip>
      </span>
      </template>

      <template #item.enable="{ item }">
        <v-switch v-model="item.enable"
                  color="primary"
                  hide-details
                  inset
                  base-color="lightprimary"
                  density="compact"
        >
          <template #track-true>
            <CheckIcon class="mt-1" size="18"></CheckIcon>
          </template>
          <template #track-false>
            <MinusIcon class="mt-1" size="18"></MinusIcon>
          </template>
        </v-switch>
      </template>

      <template #item.type="{ value }">
        <v-chip rounded="lg" size="small" color="secondary" class="font-weight-medium">
          {{value}}
        </v-chip>
      </template>

      <template #item.action="{ value }">
        <v-chip rounded="lg" size="small" color="primary" class="font-weight-medium">
          {{value}}
        </v-chip>
      </template>

      <template #item.actions="{ item }">
        <v-btn icon variant="text">
          <DotsVerticalIcon/>

          <v-menu activator="parent">
            <v-sheet rounded="md">
              <v-list-item>
                <ConfirmButton
                  flat
                  title="删除提示"
                  content="确定要删除这项内容吗？"
                  @click.stop.prevent
                >
                  <template #prepend>
                    <TrashIcon></TrashIcon>
                  </template>
                  <strong class="text-red-lighten-2 align-center">删除</strong>
                </ConfirmButton>
              </v-list-item>

              <v-list-item>
                <EditDialog :subtask="item"></EditDialog>
              </v-list-item>

            </v-sheet>
          </v-menu>
        </v-btn>
      </template>

      <template #item.pushType="{ value }">
        <IconSet :item="getPushIcon(value)"></IconSet>
      </template>

      <template #no-data>
        <EmtyPage></EmtyPage>
      </template>
    </v-data-table-server>
  </v-sheet>
</template>

<style scoped>

</style>
