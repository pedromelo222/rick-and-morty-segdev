<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
import { IconGithub } from '@/components/icons'
</script>

<template>
  <div class="w-full h-60 md:h-72 flex items-center justify-center border-b-2 border-black relative">
    <img src="@/assets/logo.png" class="p-4 w-full md:w-4/12  h-auto ">
    <div class="absolute top-0 right-0 mr-2 mt-2 md:mr-4 md:mt-3 ">
      <AppButton
        icon
        class="!h-10 !w-10"
        tag="a"
        href="https://github.com/pedromelo222/rick-and-morty-segdev"
        target="_blank"
      >
        <IconGithub class="h-5" />
      </AppButton>
    </div>
  </div>
  <div class="absolute top-44 sm:top-44 md:top-40  lg:top-24 xl:top-12 -z-10">
    <img src="@/assets/picklerick.png" class="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] rotate-12">
  </div>
</template>
