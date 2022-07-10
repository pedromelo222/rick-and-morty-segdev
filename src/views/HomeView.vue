<script setup lang="ts">
import { RouterView } from 'vue-router'
import CharacterList from '../components/CharacterList.vue'
</script>

<template>
  <CharacterList />
  <Suspense>
    <router-view />
  </Suspense>
</template>
