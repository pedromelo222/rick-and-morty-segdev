<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from './components/AppLayout.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <!--
   Aplicando named slots no componente AppLayout
   facilita a visualização do visualização da estrutura
   -->
  <AppLayout>
    <template #head>
      <Navbar />
    </template>

    <template #body>
      <RouterView />
    </template>
  </AppLayout>
</template>
