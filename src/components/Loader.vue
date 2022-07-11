<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const delayShow = ref(false)

watch(() => props.show, () => {
  if (!props.show) {
    setTimeout(() => {
      delayShow.value = false
    }, 700)
  }
  else {
    delayShow.value = true
  }
}, { immediate: true })
</script>

<template>
  <transition name="scale" mode="out-in">
    <div v-show="delayShow" class="flip-box">
      <div class="flip-box-inner ">
        <div class="flip-box-front">
          <img src="@/assets/morty-smith.png" class="bg-yellow-400 shadow rounded-full border-4 border-black">
        </div>
        <div class="flip-box-back">
          <img src="@/assets/rick-sanchez.png" class="bg-red-400 shadow rounded-full border-4 border-black">
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Rotate animation https://www.w3schools.com/howto/howto_css_flip_image.asp */

.shadow {
    box-shadow: 0px 3px 0px black;
}

.flip-box {
  width: 70px;
  height: 70px;
  perspective: 300px;
}

.flip-box-inner {
  position: relative;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
    animation: rotate 2s linear infinite;

}

@keyframes rotate{
  from { transform: rotateY(0deg)}
  50% { transform :rotateY(180deg)}
  to{ transform: rotateY(360deg); }

}

.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-box-back {
  transform: rotateY(180deg);
}

.scale-enter-active, .scale-leave-active {
  transition: all 1s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
</style>
