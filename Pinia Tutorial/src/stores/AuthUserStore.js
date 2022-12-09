import { defineStore } from 'pinia'

export const useAuthUserStore = defineStore('authUserStore', {
  state: () => ({
    username: 'ciaran_io',
  }),

})
