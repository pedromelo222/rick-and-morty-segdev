<template>
  <div class="flex w-full sm:p-0">
    <slot name="head" />
  </div>
  <div id="content-body" class="bg-blue-500 scroll-smooth md:min-h-[600px]">
    <div class="mx-auto max-w-7xl px-3">
      <slot name="body" />
    </div>
  </div>
  <div class="flex w-full items-center h-full">
    <slot name="footer" />
  </div>
</template>
