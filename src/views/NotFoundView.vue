<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
import { IconArrowLeft } from '@/components/icons'
</script>

<template>
  <div class="items-shadow h-full w-full text-[10em] xl:text-[22em] text-center flex items-center text-white justify-center min-h-[400px] md:min-h-[500px] relative">
    4 <img src="@/assets/pagenotfound.png" class="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] -mx-8 ">4
    <div class="absolute top-0 left-0 ml-2 mt-8 md:ml-4 md:mt-8 text-black">
      <AppButton
        icon
        color="green"
        tag="RouterLink"
        to="/"
      >
        <IconArrowLeft class="h-5" />
      </AppButton>
    </div>
  </div>
</template>

<style>
.items-shadow {

   filter: drop-shadow(8px 8px 0px black);
}
</style>
