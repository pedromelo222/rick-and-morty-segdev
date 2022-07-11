import { defineStore } from 'pinia'
import type { Pagination } from '@/types'

let local = localStorage.getItem('pagination')
if (local)
  local = JSON.parse(local)

export const usePaginationStore = defineStore('pagination', {
  state: () => ({
    pagination: {} as Pagination,
    actualPage: (local || 1) as number,
    lastPage: 1,
  }),
  getters: {
    isNextPage: (state) => {
      return state.pagination.next !== null
    },
    isPreviousPage: (state) => {
      return state.pagination.prev !== null
    },
    getTotalPages: (state) => {
      return state.pagination.pages ? state.pagination.pages : 1
    },
  },
  actions: {
    setPagination(pagination: Pagination) {
      this.pagination = pagination
      localStorage.setItem('pagination', JSON.stringify(this.actualPage))
    },
    setNextPage() {
      if (this.isNextPage)
        this.actualPage++
    },
    setPreviousPage() {
      if (this.isPreviousPage)
        this.actualPage--
    },
    setPage(page: number) {
      if (page > 0)
        this.actualPage = page
    },

  },

})

