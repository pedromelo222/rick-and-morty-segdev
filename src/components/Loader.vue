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
.shadow {
    box-shadow: 0px 3px 0px black;
}

/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-box {
  width: 70px;
  height: 70px;
  perspective: 300px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
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

/* Position the front and back side */
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the back side */
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
