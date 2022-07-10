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
  <!--
    Embora o componente <Suspense> ainda esteja como "Experimental Future"
    na documentação do vue, acredito que não exista problemas em
    aplicar ele aqui, pois não está sendo utilizado com mais de uma Promise.
      -->
  <Suspense>
    <router-view />
  </Suspense>
</template>
