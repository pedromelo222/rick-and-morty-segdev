import { defineStore } from 'pinia'
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
      this.filters = { ...this.filters, ...filters }
    },

  },

})

