<script setup lang="ts">
import { RouterView } from 'vue-router'
import CharacterList from '../components/CharacterList.vue'
import CharacterFilter from '@/components/CharacterFilter.vue'
</script>

<template>
  <CharacterFilter />
  <CharacterList />
  <Suspense>
    <router-view />
  </Suspense>
</template>
