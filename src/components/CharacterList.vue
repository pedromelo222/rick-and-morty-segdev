<script setup lang="ts">
import { useCharacterStore } from '@/stores'
import AppCard from '@/components/ui/AppCard.vue'

const characterStore = useCharacterStore()
characterStore.fetchCharacterList()
</script>

<template>
  <div v-show="!characterStore.emptySeach" class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
    <AppCard
      v-for="(character, key) in characterStore.characters"
      :key="key"
      v-bind="character"
    />
  </div>
  <div v-show="characterStore.emptySeach" class="flex w-full justify-center">
    <img src="@/assets/not-found.png" class="w-[500px]">
  </div>
</template>
