<script setup lang="ts">
defineProps({
  rounded: {
    type: String,
    default: 'md',
    validator: (value: string) => {
      return [
        'sm',
        'md',
        'full',
      ].includes(value)
    },
  },
  color: {
    type: String,
    default: 'white',
    validator: (value: string) => {
      return [
        'white',
        'yellow',
        'green',
      ].includes(value)
    },
  },
  selected: {
    type: Boolean,
    default: false,
  },
  selectedColor: {
    type: String,
    required: false,
    validator: (value: string) => {
      return [
        'white',
        'yellow',
        'green',
      ].includes(value)
    },
  },
  icon: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'button',
    required: false,
    validator: (value: string) => {
      return [
        'button',
        'a',
        'RouterLink',
      ].includes(value)
    },
  },
})
</script>

<template>
  <component
    :is="tag"
    class="btn"
    :class="[
      `btn-${color}`,
      `btn-rounded-${rounded}`,
      selected && `btn-selected-${selectedColor}`,
      icon && 'btn-icon',
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  @apply flex px-6 py-1.5 sm:px-6 sm:py-2 sm:text-xl font-medium justify-center items-center border-2 border-black ;
  box-shadow: 3px 5px 0px #000;
  -webkit-transition: box-shadow 400ms cubic-bezier(.175, .885, .32, 1.275), -webkit-transform 400ms cubic-bezier(.175, .885, .32, 1.275);
  transition: box-shadow 400ms cubic-bezier(.175, .885, .32, 1.275), -webkit-transform 400ms cubic-bezier(.175, .885, .32, 1.275);
  transition: box-shadow 400ms cubic-bezier(.175, .885, .32, 1.275), transform 400ms cubic-bezier(.175, .885, .32, 1.275);
  transition: box-shadow 400ms cubic-bezier(.175, .885, .32, 1.275), transform 400ms cubic-bezier(.175, .885, .32, 1.275), -webkit-transform 400ms cubic-bezier(.175, .885, .32, 1.275);
}

.btn-icon {
  @apply h-12 w-12 !p-0;
}

.btn-yellow {
  @apply bg-app-yellow hover:bg-app-yellow-focus;
}

.btn-green {
  @apply bg-app-green hover:bg-app-green-focus;
}

.btn-white {
  @apply bg-white hover:bg-zinc-100;
}

.btn-selected-white {
  @apply bg-white hover:bg-white;
}

.btn-selected-green {
  @apply bg-app-green hover:bg-app-green;
}

.btn-selected-yellow {
  @apply bg-app-yellow hover:bg-app-yellow;
}

.btn-rounded-sm {
  @apply rounded-md;
}
.btn-rounded-md {
  @apply rounded-[1.2rem];
}
.btn-rounded-full {
  @apply rounded-full;
}

.btn:hover {
  box-shadow: 4px 8px 0 0 #000;
  -webkit-transform: translate(0px, -5px);
  -ms-transform: translate(0px, -5px);
  transform: translate(0px, -5px);
}

.btn:active {
    box-shadow: 0 0 0 0 #000;
    -webkit-transform: translate(0px, 6px);
    -ms-transform: translate(0px, 6px);
    transform: translate(0px, 6px);
}
</style>
