import { defineStore } from 'pinia'
import { useFiltersStore } from '@/stores'
import type { Character, Pagination } from '@/types'
import HTTP from '@/plugin/http'

export const useCharacterStore = defineStore('characters', {
  state: () => ({
    characters: [] as Character[],
    pagination: {} as Pagination,
    emptySeach: false,
  }),
  getters: {
    getCharacterById: (state) => {
      return (characterId: number) => state.characters.find(char => char.id === characterId)
    },

  },
  actions: {
    async fetchCharacterList() {
      const filtersStore = useFiltersStore()
      try {
        const { data } = await HTTP.get('/character/', { params: filtersStore.filters })
        this.characters = data.results
        this.pagination = data.info
        this.emptySeach = false

        return data
      }
      catch (err: any) {
        if (err.response.data.error.includes('There is nothing here'))
          this.emptySeach = true

        return err.response.data
      }
    },
    async fetchCharacterById(id: number) {
      /**
       * Aqui estou usando a store apenas como API, talvez seja interessante refatorar
       * e criar uma API
       */
      try {
        const { data } = await HTTP.get(`/character/${id}`)

        return data
      }
      catch (err: any) {
        return err.response.data
      }
    },
    // change name
    async getNextCharacterList() {
      if (this.pagination.next) {
        try {
          const { data } = await HTTP.get(this.pagination.next)
          this.characters = data.results
          this.pagination = data.info

          return data
        }
        catch (err: any) {
          return err.response.data
        }
      }
    },
    // change name
    async getPreviousCharacterList() {
      if (this.pagination.prev) {
        try {
          const { data } = await HTTP.get(this.pagination.prev)
          this.characters = data.results
          this.pagination = data.info

          return data
        }
        catch (err: any) {
          return err.response.data
        }
      }
    },
  },
})

