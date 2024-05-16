<script setup lang="ts">
import {findTaskPage} from "@/api/methods/task";
import {ref} from "vue";


type PageResp = {
  pageSize: number
  totalCount: number
  currentPage: number
  totalPages: number
  list: any[],
}

const tasks = ref({} as PageResp)

const selected= ref([]);

type Search = {
  page: number
  size: number
}

const search = ref<Search>({
  page: 1,
  size: 20,
})

async function loadItems({ page, itemsPerPage }: { page: number, itemsPerPage: number }) {
  search.value.page = page
  search.value.size = itemsPerPage
  findTaskPage().then((res) => {
    tasks.value = res
  })
}

const headers  = [
  { title: '名称', key: 'name', align: 'center', sortable: false },
  { title: '描述', key: 'description' , align: 'center', sortable: false, minWidth: '150px', maxWidth: '200px' ,},
  { title: '启用', key: 'enable', align: 'start', sortable: false },
  { title: '创建时间', key: 'createTime', align: 'center', sortable: false },
  { title: '操作', key: 'action', align: 'center', sortable: false },
]

</script>

<template>
  <v-sheet rounded="md"  class="pa-4">
    <v-data-table-server
      class="mt-4 border-sm border-opacity-50 border-borderLight"
      sticky
      hover
      show-select
      v-model="selected"
      :headers="headers"
      :items="tasks.list ? tasks.list : []"
      :items-length="tasks.totalCount ? tasks.totalCount : 0"
      v-model:items-per-page="search.size"
      :items-per-page-options= "[5, 10, 15, 20]"
      items-per-page-text="每页:"
      @update:options="loadItems"
    >
      <template #item.enable="{ item }">
        <v-switch v-model="item.enable"
                  color="primary"
                  hide-details
                  inset
                  base-color="containerBg"
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

      <template #item.action="{ item }">
        <v-btn icon variant="text">
          <DotsVerticalIcon/>
        </v-btn>
      </template>
    </v-data-table-server>
  </v-sheet>
</template>

<style scoped>

</style>
