import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    items: [],

  }),

  // computed state
  getters: {

    count: (state) => state.items.length,

    isEmpty: (state) => state.count === 0

  },
  // mautate state
  actions: {
    addItems(count, item) {
      count = parseInt(count)
      for (let i = 0; i < count; i++) {
        // spread operator clones item
        // passes object by value not by reference
        this.items.push({ ...item })
      }
    }
  }


})