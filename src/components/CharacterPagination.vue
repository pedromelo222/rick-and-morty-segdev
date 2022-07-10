<script setup lang="ts">
import AppButton from './ui/AppButton.vue'
import {
  IconArrowLeft,
  IconArrowRight,
} from './icons'
import { useCharacterStore } from '@/stores'
const characterStore = useCharacterStore()

function nextPage() {
  if (characterStore.pagination.next) {
    characterStore.getNextCharacterList()
    scrollTop()
  }
}
function previousPage() {
  if (characterStore.pagination.prev) {
    characterStore.getPreviousCharacterList()
    scrollTop()
  }
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="flex justify-center items-center gap-4 py-14">
    <AppButton
      :class="{ 'cursor-not-allowed': !characterStore.pagination.prev }"
      icon
      color="green"
      rounded="full"
      @click="previousPage"
    >
      <IconArrowLeft class="h-7" />
    </AppButton>
    <div class="font-medium ">
      {{ ` Page 1/${characterStore.pagination.pages} ` }}
    </div>
    <AppButton
      :class="{ 'cursor-not-allowed': !characterStore.pagination.next }"
      icon
      color="green"
      rounded="full"
      @click="nextPage"
    >
      <IconArrowRight class="h-7" />
    </AppButton>
  </div>
</template>
