import { defineStore } from 'pinia'
import type { Filters } from '@/types'

let local = localStorage.getItem('filters')
if (local)
  local = JSON.parse(local)

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    filters: (local || {}) as Filters,
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
      localStorage.setItem('filters', JSON.stringify(this.filters))
    },

  },

})

