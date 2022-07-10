<script setup lang="ts">
import type { Gender, Status } from '@/types'
import AppButton from '@/components/ui/AppButton.vue'
import { useIconFromType } from '@/composables'
defineProps({
  image: {
    type: String,
    default: 'none',
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String as () => Status,
    default: 'unknown',
  },
  gender: {
    type: String as () => Gender,
    default: 'unknown',
  },
  id: {
    type: Number,
    required: true,
  },
})
/**
 * Composable que retorna os icons do tipo gender e status
 */
const { getIconGender, getIconStatus } = useIconFromType()
</script>

<template>
  <div class="card">
    <img :src="image">

    <div class="card-body">
      <div>
        {{ name }}
      </div>
      <div class="flex justify-center space-x-2 mt-1">
        <component :is="getIconGender(gender)" class="h-5" />
        <component :is="getIconStatus(status)" class="h-5" />
      </div>
    </div>
    <div class="card-footer">
      <AppButton
        color="yellow"
        tag="RouterLink"
        :to="`/character/${id}`"
      >
        View
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-white border-2 border-black rounded-lg overflow-hidden w-full xl:w-[300px] ;
  box-shadow: 5px 5px 0px black;
}
.card-body {
  @apply text-center w-full justify-between px-4 text-lg mt-2 font-medium;
}
.card-footer{
  @apply  px-4 pb-4 flex justify-center mt-4  mr-1;
}
.card-footer .btn {
  @apply px-8 sm:px-12;
}
</style>

