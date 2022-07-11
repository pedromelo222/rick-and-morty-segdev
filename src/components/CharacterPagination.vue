<script setup lang="ts">
import AppButton from './ui/AppButton.vue'
import {
  IconArrowLeft,
  IconArrowRight,
} from './icons'
import { usePaginationStore } from '@/stores'
const paginationStore = usePaginationStore()

function nextPage() {
  if (paginationStore.isNextPage) {
    paginationStore.setNextPage()
    scrollTop()
  }
}
function previousPage() {
  if (paginationStore.isPreviousPage) {
    paginationStore.setPreviousPage()
    scrollTop()
  }
}

function scrollTop() {
  // setTimeout(() => {
  const startOfSearch = document.getElementById('content-body')
  if (startOfSearch) {
    window.scrollTo({
      top: startOfSearch.offsetTop,
      behavior: 'smooth',
    })
  }

  // }, 400)
}
</script>

<template>
  <div class="flex justify-center items-center gap-4 py-14">
    <AppButton
      :class="{ 'cursor-not-allowed': !paginationStore.isPreviousPage }"
      icon
      color="green"
      rounded="full"
      @click="previousPage"
    >
      <IconArrowLeft class="h-7" />
    </AppButton>
    <div class="font-medium ">
      {{ ` Page ${paginationStore.actualPage}/${paginationStore.pagination.pages} ` }}
    </div>
    <AppButton
      :class="{ 'cursor-not-allowed': !paginationStore.isNextPage }"
      icon
      color="green"
      rounded="full"
      @click="nextPage"
    >
      <IconArrowRight class="h-7" />
    </AppButton>
  </div>
</template>
