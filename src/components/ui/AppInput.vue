<script setup lang="ts">
import { computed, ref } from 'vue'
import { IconTimes } from '@/components/icons'

/**
 * AppInput usa o metodo two-way data binding
 * para sincronizar a propiedade modelValue com o componente pai.
 */

type timeout = number | ReturnType<typeof setTimeout>

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  debounce: {
    type: Boolean,
    default: false,
  },
  clearButton: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])
const input = ref<HTMLInputElement | null>()

let debounceTime: timeout
function emitValue(e: Event) {
  const event = (e.target === document ? (e.target as Document).documentElement : e.target
  ) as HTMLInputElement

  if (event) {
    if (!props.debounce) {
      emit('update:modelValue', event.value)
    }
    else {
      /**
       * Função debounce para impedir que a aplicação faça uma requisição na API a
       * cada tecla pressionada.
      */
      clearTimeout(debounceTime)
      debounceTime = setTimeout(() => {
        emit('update:modelValue', event.value)
      }, 450)
    }
  }
}

function inputFocus() {
  input.value?.focus()
}

function onClickEnter() {
  /**
  * Esconder teclado no mobile ao pressionar 'Enter' removendo o foco do input
  */
  input.value?.blur()
}

const showButtonClear = computed(() => {
  return props.clearButton && props.modelValue.length > 0
})

function clear() {
  if (props.clearButton)
    emit('update:modelValue', '')
}
</script>

<template>
  <div class="input-wrapper" @click.self="inputFocus">
    <div class="input-left-icon">
      <slot name="left-icon" />
    </div>
    <input
      ref="input"
      :value="modelValue"
      type="text"
      :placeholder="placeholder"
      class="input"
      @input="emitValue"
      @keyup.enter="onClickEnter"
    ><Transition name="bounce">
      <button v-show="showButtonClear" class="absolute right-0 mr-4 w-10 h-full group" @click="clear">
        <div class="bg-zinc-500/80 rounded-full border w-6 h-6  group-hover:bg-red-500 flex justify-center items-center m-auto">
          <IconTimes class="h-4 w-4  text-white" />
        </div>
      </button>
    </Transition>
  </div>
</template>

<style scoped>
.input-wrapper  {
    @apply relative cursor-text bg-white  w-full outline-0 rounded-full h-14 flex px-4 border-2 border-black items-center;
    box-shadow: 1px 3px 0px #000;
    -webkit-transition: box-shadow 400ms cubic-bezier(.175, .885, .32, 1.275), -webkit-transform 400ms cubic-bezier(.175, .885, .32, 1.275);
    transition: box-shadow 400ms cubic-bezier(.175, .885, .32, 1.275), -webkit-transform 400ms cubic-bezier(.175, .885, .32, 1.275);
    transition: box-shadow 400ms cubic-bezier(.175, .885, .32, 1.275), transform 400ms cubic-bezier(.175, .885, .32, 1.275);
    transition: box-shadow 400ms cubic-bezier(.175, .885, .32, 1.275), transform 400ms cubic-bezier(.175, .885, .32, 1.275), -webkit-transform 400ms cubic-bezier(.175, .885, .32, 1.275);

}
.input {
    @apply h-full w-full mr-4 outline-none;
}
.input-wrapper:hover {
    box-shadow: 1px 6px 0 0 #000;
    -webkit-transform: translate(0px, -5px);
    -ms-transform: translate(0px, -5px);
    transform: translate(0px, -5px);
}
.input-left-icon{
    @apply ml-2 mr-5;
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.10);
  }
  100% {
    transform: scale(1);
  }
}
</style>
