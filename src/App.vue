<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from './components/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <template #head>
      Navbar
    </template>

    <template #body>
      <RouterView />
    </template>

    <template #footer>
      Footer
    </template>
  </AppLayout>
</template>
