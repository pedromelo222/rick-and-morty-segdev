<script setup lang="ts">
import AppCard from './ui/AppCard.vue'
import Loader from './Loader.vue'
import { useCharacterStore } from '@/stores'
import AppButton from '@/components/ui/AppButton.vue'
import { useIconFromType } from '@/composables'

const characterStore = useCharacterStore()
characterStore.fetchCharacterList()

/**
 * Composable que retorna os icons do tipo gender e status
 */
const { getIconGender, getIconStatus } = useIconFromType()
</script>

<template>
  <div class="fixed bottom-0 right-0 mr-3 mb-3 z-40">
    <Loader :show="characterStore.isLoading()" class="m-auto" />
  </div>
  <div v-show="!characterStore.state.emptySeach" class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-8 relative">
    <AppCard
      v-for="(character, key) in characterStore.state.characters"
      :key="key"
    >
      <template #image>
        <img :src="character.image">
      </template>
      <template #body>
        <div>
          {{ character.name }}
        </div>
        <div class="flex justify-center space-x-2 mt-1">
          <component :is="getIconGender(character.gender)" class="h-5" />
          <component :is="getIconStatus(character.status)" class="h-5" />
        </div>
      </template>
      <template #footer>
        <AppButton
          color="yellow"
          tag="RouterLink"
          :to="`/character/${character.id}`"
          class="!px-8 !sm:px-12"
        >
          View
        </AppButton>
      </template>
    </AppCard>
  </div>
  <div v-show="characterStore.state.emptySeach" class="relative flex w-full justify-center flex-col items-center">
    <AppCard class="absolute -rotate-12 opacity-90 pb-3" :card-footer="false">
      <template #body>
        No characters found
      </template>
    </AppCard>
    <img src="@/assets/not-found.png" class="w-[500px]">
  </div>
</template>
