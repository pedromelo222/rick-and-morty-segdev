<script setup lang="ts">
import { RouterView } from 'vue-router'
import CharacterList from '@/components/CharacterList.vue'
import CharacterFilter from '@/components/CharacterFilter.vue'
import CharacterPagination from '@/components/CharacterPagination.vue'
</script>

<template>
  <CharacterFilter />
  <CharacterList />
  <CharacterPagination />
  <Suspense>
    <router-view />
  </Suspense>
</template>
