<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { IconDna, IconLocation, IconPlanet, IconTV, IconTimes } from '@/components/icons'
import AppButton from '@/components/ui/AppButton.vue'
import { useHideScroll, useIconFromType } from '@/composables'
import { useCharacterStore } from '@/stores'
import type { Character } from '@/types'

const characterStore = useCharacterStore()
/**
 * Composable que retorna os icons do tipo gender e status
 */
const { getIconGender, getIconStatus } = useIconFromType()
const { replace } = useRouter()

/**
 * Composable que tem a função de esconder o scroll ao abrir o modal
 */
const { hideScroll } = useHideScroll()
hideScroll()

const character = ref<Character>()

const characterId = Number(useRoute().params.id)
/**
 * verifica se parametro passado na url é um numero valido,
 * caso seja outro tipo redireciona para pagina 404
 */
if (isNaN(characterId))
  replace({ name: 'not-found' })

character.value = characterStore.getCharacterById(characterId)

/**
 * Caso não encontre o personagem será necessário solicitar a store
 * para fazer uma requisição a API em busca do personagem.
 *
 * obs: um dos motivos de não encontrar o personagem salvo na store é pelo fato
 * de que o usuário acessou essa rota de um outro domínio.
 */
if (character.value === undefined)
  character.value = await characterStore.fetchCharacterById(characterId)

/**
 * Caso não encontre o id redireciona para página 404
 */
if (!character.value)
  replace({ name: 'not-found' })
</script>

<template>
  <teleport to="#modal">
    <div class="fixed inset-0 z-30 h-screen w-full backdrop-brightness-50" />
    <div class="overflow-y-auto fixed inset-0 z-30  w-full flex justify-center ">
      <div v-if="character" class="modal-box self-center flex flex-col md:flex-row p-3 md:p-5 mx-4 relative max-w-4xl w-full bg-white  border-2 border-black rounded-xl ">
        <AppButton
          tag="RouterLink"
          to="/"
          class="absolute -right-3 -top-4"
          rounded="full"
          icon
        >
          <IconTimes class="h-5" />
        </AppButton>
        <div class="w-full flex justify-center md:w-auto h-full -mt-4 mb-3 md:mt-0 ">
          <img :src="character?.image" class="border-2 border-black rounded-xl -rotate-12 max-h-[200px] md:max-h-[300px]">
        </div>
        <div class="ml-8 ">
          <p class="text-3xl md:text-6xl">
            {{ character?.name }}
          </p>

          <ul class="pl-6 text-xl list-none space-y-1 mt-2">
            <li class="flex items-center">
              <span class="w-10 mr-1">
                <component :is="getIconStatus(character.status)" class="h-8 w-10" />
              </span>
              {{ character.status }}
            </li>
            <li class="flex items-center">
              <span class="w-10 mr-1">
                <component :is="getIconGender(character.gender)" class="h-8 w-10" />
              </span>
              {{ character.gender }}
            </li>
            <li class="flex items-center">
              <span class="w-10 mr-1">
                <IconDna class="h-10 " />
              </span>
              {{ character.species }}
            </li>
            <li class="flex items-center">
              <span class="w-10 mr-1">
                <IconPlanet class="h-9 w-10" />
              </span>
              {{ character.origin.name }}
            </li>
            <li class="flex items-center">
              <span class="w-10 mr-1">
                <IconLocation class="h-9 w-10" />
              </span>
              {{ character.location.name }}
            </li>
            <li class="flex items-center">
              <span class="w-10 mr-1">
                <IconTV class="h-9 w-10" />
              </span>
              {{ `Episodes: ${character.episode.length}` }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal-box, img {
  box-shadow: 2px 4px 0px black;
}
</style>

