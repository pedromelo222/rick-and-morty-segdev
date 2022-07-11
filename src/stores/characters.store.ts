import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFiltersStore, usePaginationStore } from '@/stores'
import type { Character } from '@/types'
import HTTP from '@/plugin/http'

/**
 * Utilizando pinia no modo setup store, a ideia é
 * aplicar a pattern observer para identificar mudanças no
 * filtros e na paginação.
 */
export const useCharacterStore = defineStore('characters', () => {
  const state = ref({
    characters: [] as Character[],
    emptySeach: false,
  })

  const pagination = usePaginationStore()
  const filters = useFiltersStore()

  /**
   * $subscribe (Semelhante ao 'watcher' do vue),
   * para observar a filtersStore, qualquer mudança no stado do filtro é chamada a função.
   */
  filters.$subscribe(() => {
    pagination.setPage(1)
    fetchCharacterList()
  }, { detached: true })

  pagination.$subscribe(() => {
    if (pagination.lastPage !== pagination.actualPage)
      fetchCharacterList()
  }, { detached: true })

  function getCharacterById(characterId: number) {
    return state.value.characters.find((char: { id: number }) => char.id === characterId)
  }

  async function fetchCharacterList() {
    pagination.lastPage = pagination.actualPage
    try {
      const { data } = await HTTP.get('/character/', {
        params: { ...filters.filters, page: pagination.actualPage },
      })
      state.value.characters = data.results
      pagination.setPagination(data.info)
      state.value.emptySeach = false

      return data
    }
    catch (err: any) {
      state.value.emptySeach = true

      return false
    }
  }
  async function fetchCharacterById(id: number) {
    try {
      const { data } = await HTTP.get(`/character/${id}`)
      return data
    }
    catch (err: any) {
      return false
    }
  }

  return {
    state,
    fetchCharacterList,
    fetchCharacterById,
    getCharacterById,
  }
})

