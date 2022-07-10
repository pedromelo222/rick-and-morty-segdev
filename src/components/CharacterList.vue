<script setup lang="ts">
import { useCharacterStore } from '@/stores'
import AppCard from '@/components/ui/AppCard.vue'
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
  <div v-show="!characterStore.emptySeach" class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
    <AppCard
      v-for="(character, key) in characterStore.characters"
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
  <div v-show="characterStore.emptySeach" class="flex w-full justify-center">
    <img src="@/assets/not-found.png" class="w-[500px]">
  </div>
</template>
