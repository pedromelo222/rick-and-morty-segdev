import { defineStore } from 'pinia'
import { useCharacterStore } from '@/stores'
import type { Filters } from '@/types'

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    filters: {} as Filters,
  }),
  getters: {
    getGender: (state) => {
      return state.filters.gender
    },
    getStatus: (state) => {
      return state.filters.status
    },

  },
  actions: {
    async setFilters(filters: Filters) {
      const characterStore = useCharacterStore()
      this.filters = { ...this.filters, ...filters }
      characterStore.fetchCharacterList()
    },

  },

})

