<script setup lang="ts">
defineProps({
  cardBody: {
    type: Boolean,
    default: true,
  },
  cardFooter: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="card">
    <slot name="image" />
    <div v-show="cardBody" class="card-body">
      <slot name="body" />
    </div>
    <div v-show="cardFooter" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
.card {
  @apply bg-white border-2 border-black rounded-lg overflow-hidden flex flex-col justify-between ;
  box-shadow: 5px 5px 0px black;
}
.card-body {
  @apply text-center w-full justify-between px-4 text-lg mt-2 font-medium;
}
.card-footer {
  @apply  px-4 pb-4 flex justify-center mt-4  mr-1;
}
</style>

