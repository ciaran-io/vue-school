import { defineStore } from 'pinia'
import { groupBy } from 'lodash'
export const useCartStore = defineStore('cartStore', {
  state: () => ({
    items: [],

  }),

  // computed state
  getters: {
    // return cart length
    count: (state) => state.items.length,
    // return cart count if length is equal to 0
    isEmpty: (state) => state.count === 0,
    // return grouped products that are the same product
    grouped: (state) => groupBy(state.items, (item) => item.name)


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