<script setup lang="ts">
import { type Ref, ref, watch } from 'vue'
import {
  IconGenderFemale,
  IconGenderMale,
  IconGenderless,
  IconHeart,
  IconQuestion,
  IconSearch,
  IconSkull,
  IconTimes,
} from './icons'
import AppButtonGroup from './ui/AppButtonGroup.vue'
import AppButton from './ui/AppButton.vue'
import { useFiltersStore } from '@/stores'
import AppInput from '@/components/ui/AppInput.vue'
import type { Filters, Gender, Status } from '@/types'

const searchValue = ref('')
const filtersStore = useFiltersStore()

interface GenderItem {
  name: Gender
  icon: Ref
}

interface statusItem {
  name: Status
  icon: Ref
}

const genderList: GenderItem[] = [
  { name: 'Male', icon: IconGenderMale },
  { name: 'Female', icon: IconGenderFemale },
  { name: 'Genderless', icon: IconGenderless },
  { name: 'unknown', icon: IconQuestion },
]

const statusList: statusItem[] = [
  { name: 'Alive', icon: IconHeart },
  { name: 'Dead', icon: IconSkull },
  { name: 'unknown', icon: IconQuestion },
]

function setGender(name: Gender) {
  const filter: Filters = {
    gender: filtersStore.getGender !== name ? name : undefined,
  }
  filtersStore.setFilters(filter)
}

function setStatus(name: Status) {
  const filter: Filters = {
    status: filtersStore.getStatus !== name ? name : undefined,
  }
  filtersStore.setFilters(filter)
}

function setName(name: string) {
  const filter: Filters = {
    name,
  }
  filtersStore.setFilters(filter)
}

watch(searchValue, () => {
  setName(searchValue.value)
})
</script>

<template>
  <div class="py-7 sm:py-10 flex flex-col space-y-8">
    <div class="mx-auto max-w-xl w-full">
      <AppInput
        v-model="searchValue"
        debounce
        clear-button
        placeholder="Search"
      >
        <template #left-icon>
          <IconSearch class="h-5" />
        </template>
      </AppInput>
    </div>

    <div class="flex flex-wrap gap-2 justify-center w-full items-center sm:gap-3">
      <AppButtonGroup>
        <AppButton
          v-for="(gender, key) in genderList"
          :key="key"
          v-bind="{
            'selected': filtersStore.getGender === gender.name,
            'selected-color': 'green',
          }"
          @click="setGender(gender.name)"
        >
          <component :is="gender.icon" class="h-6 mr-0 md:mr-2" />
          <span class="hidden lg:block">{{ gender.name }}</span>
        </AppButton>
      </AppButtonGroup>
      <AppButtonGroup>
        <AppButton
          v-for="(status, key) in statusList"
          :key="key"
          v-bind="{
            'selected': filtersStore.getStatus === status.name,
            'selected-color': 'green',
          }"
          @click="setStatus(status.name)"
        >
          <component :is="status.icon" class="h-6 mr-0 md:mr-2" />
          <span class="hidden lg:block">{{ status.name }}</span>
        </AppButton>
      </AppButtonGroup>
    </div>
  </div>
</template>
